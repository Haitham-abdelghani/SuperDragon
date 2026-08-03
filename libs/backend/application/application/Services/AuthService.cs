using SuperDragon.Backend.Application.DTOs;
using SuperDragon.Backend.Application.Interfaces;
using SuperDragon.Backend.Domain.Entities;

namespace SuperDragon.Backend.Application.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUserRepository _userRepository;
        private readonly IPasswordHasher _passwordHasher;
        private readonly IJwtProvider _jwtProvider;

        public AuthService(IUserRepository userRepository, IPasswordHasher passwordHasher, IJwtProvider jwtProvider)
        {
            _userRepository = userRepository;
            _passwordHasher = passwordHasher;
            _jwtProvider = jwtProvider;
        }

        public async Task<AuthResponseDto> RegisterAsync(RegisterDto request)
        {
            // 1. Check if user already exists
            if (await _userRepository.ExistsByEmailAsync(request.Email))
            {
                throw new Exception("User with this email already exists.");
            }

            // 2. Hash the password securely
            string hashedPassword = _passwordHasher.Hash(request.Password);

            // 3. Create the Domain Entity
            var user = new User
            {
                Username = request.Username,
                Email = request.Email,
                PasswordHash = hashedPassword
            };

            // 4. Save to Database
            await _userRepository.AddAsync(user);
            await _userRepository.SaveChangesAsync();

            // 5. Generate JWT Token
            var token = _jwtProvider.GenerateToken(user);

            return new AuthResponseDto
            {
                Token = token,
                Username = user.Username
            };
        }

        public async Task<AuthResponseDto> LoginAsync(LoginDto request)
        {
            // 1. Fetch user by email
            var user = await _userRepository.GetByEmailAsync(request.Email);
            if (user == null)
            {
                throw new Exception("Invalid email or password.");
            }

            // 2. Verify password hash
            bool isPasswordValid = _passwordHasher.Verify(request.Password, user.PasswordHash);
            if (!isPasswordValid)
            {
                throw new Exception("Invalid email or password.");
            }

            // 3. Generate JWT Token
            var token = _jwtProvider.GenerateToken(user);

            return new AuthResponseDto
            {
                Token = token,
                Username = user.Username
            };
        }
    }
}

using SuperDragon.Backend.Domain.Entities;

namespace SuperDragon.Backend.Application.Interfaces
{
    public interface IUserRepository
    {
        Task<User?> GetByEmailAsync(string email);
        Task<bool> ExistsByEmailAsync(string email);
        Task AddAsync(User user);
        Task SaveChangesAsync();
    }

    public interface IPasswordHasher
    {
        string Hash(string password);
        bool Verify(string password, string passwordHash);
    }

    public interface IJwtProvider
    {
        string GenerateToken(User user);
    }
}

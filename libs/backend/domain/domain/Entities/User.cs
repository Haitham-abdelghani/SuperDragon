namespace SuperDragon.Backend.Domain.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty; // Never store plain text passwords!
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}

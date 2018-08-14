namespace DartCalendar.Integration.Tests
{
    public class User
    {
        public User(string username, string id, string token)
        {
            Username = username;
            Id = id;
            Token = token;
        }

        public string Token { get; set; }

        public string Username { get; set; }
        public string Id { get; set; }
    }
}
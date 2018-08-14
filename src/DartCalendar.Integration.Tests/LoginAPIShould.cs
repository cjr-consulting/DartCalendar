using System.Net.Http;
using System.Threading.Tasks;
using DartCalendar.Integration.Tests.Helpers;
using DartCalendar.Web;
using Microsoft.AspNetCore.Mvc.Testing;
using Newtonsoft.Json;
using Shouldly;
using Xunit;

namespace DartCalendar.Integration.Tests
{
    public class LoginApiShould
        : IClassFixture<WebApplicationFactory<Startup>>
    {
        public LoginApiShould(WebApplicationFactory<Startup> factory)
        {
            _client = factory.CreateClient();
        }

        private readonly HttpClient _client;

        private readonly User LOGGED_IN_USER = new User("user@email.io", "1", "token");

        private string withJsonContaining(User loginUser)
        {
            var json = JsonConvert.SerializeObject(
                new
                {
                    loginUser.Username,
                    loginUser.Id,
                    loginUser.Token
                },
                Json.GetSettings()
            );
            return json;
        }

        [Fact]
        public async Task ReturnUserAfterLogin()
        {
            var response = await _client.GetAsync("/api/Login");

            response.EnsureSuccessStatusCode();

            response.Content.Headers.ContentType.ToString().ShouldBe("application/json; charset=utf-8");
            var responseBody = await response.Content.ReadAsStringAsync();
            responseBody.ShouldBe(withJsonContaining(LOGGED_IN_USER));
        }
    }

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
using System;
using System.Net.Http;
using Xunit;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Testing;
using Newtonsoft.Json;
using Shouldly;
using DartCalendar.Integration.Tests.Helpers;

namespace DartCalendar.Integration.Tests
{
    public class LoginAPIShould 
        : IClassFixture<WebApplicationFactory<DartCalendar.Web.Startup>>
    {
        private WebApplicationFactory<DartCalendar.Web.Startup> _factory;
        private HttpClient _client;

        private User LOGGED_IN_USER = new User("user@email.io", "1");

        public LoginAPIShould(WebApplicationFactory<DartCalendar.Web.Startup> factory)
        {
            _factory = factory;            
            _client = _factory.CreateClient();
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

        private string withJsonContaining(User loginUser)
        {
            var json = JsonConvert.SerializeObject(
                new {
                    Username = loginUser.Username,
                    Id = loginUser.Id
                    },
                Json.GetSettings()
                );
            return json;
        }
    }

    public class User
    {
        public User(string username, string id)
        {
            Username = username;
            Id = id;
        }

        public string Username { get; set; }
        public string Id { get; set; }
    }
}

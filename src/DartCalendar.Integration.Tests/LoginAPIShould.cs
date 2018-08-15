using System.Net;

namespace DartCalendar.Integration.Tests
{
    using System;
    using System.Net.Http;
    using System.Threading.Tasks;
    using Helpers;
    using Microsoft.AspNetCore.Mvc.Testing;
    using Newtonsoft.Json;
    using Shouldly;
    using Web;
    using Xunit;

    public class LoginApiShould
        : IClassFixture<WebApplicationFactory<Startup>>
    {
        private static readonly User LOGGED_IN_USER = new User("user@email.io", "1", "token");
        private readonly HttpClient _client;

        public LoginApiShould(WebApplicationFactory<Startup> factory)
        {
            _client = factory.CreateClient();
        }

        [Fact]
        public async Task GetEvents()
        {
            var response = await _client.GetAsync("/api/Login");

            response.EnsureSuccessStatusCode();

            response.Content.Headers.ContentType.ToString().ShouldBe("application/json; charset=utf-8");
            var responseBody = await response.Content.ReadAsStringAsync();
            responseBody.ShouldBe("[]");
        }

        [Fact]
        public async Task SaveEvent()
        {
            var d = new StringContent("{\"Id\": 1, \"Name\": \"Name It\" }");
            var response = await _client.PostAsync("/api/login", d);
            response.StatusCode.ShouldBe(HttpStatusCode.OK);
        }

        private string WithJsonContaining(User loginUser)
        {
            var json = JsonConvert.SerializeObject(
                new
                {
                    loginUser.Username,
                    loginUser.Id,
                    loginUser.Token
                },
                Json.GetSettings());

            return json;
        }
    }
}
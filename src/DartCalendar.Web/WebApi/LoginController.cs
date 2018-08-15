using DartCalendar.Core.Domain;
using DartCalendar.Core.Domain.Models;

namespace DartCalendar.Web.WebApi
{
    using System;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;

    [Route("api/Login")]
    public class LoginController : Controller
    {
        private readonly IDartEventRepository _repository;

        public LoginController(IDartEventRepository repository)
        {
            _repository = repository;
        }

        [HttpPost]
        public async Task<IActionResult> Post(DartEvent dartEvent)
        {
            _repository.Add(dartEvent);
            return Ok();
        }

        public async Task<IActionResult> Get()
        {
            var events = await _repository.GetFutureEventsAsync(5);
            return Ok(events);
        }
    }
}

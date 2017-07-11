using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using TaskListApp.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TaskListApp.Controllers
{

    public class TaskController : Controller
    {
        [Route("api/tasks")]
        [HttpGet]
        public RestResponse<List<Task>> Get()
        {
            return new RestResponse<List<Task>>
            {
                IsSuccess = true,
                Data = new List<Task>
                {
	                new Task { Title = "Zadanie1", Done = false },
	                new Task { Title = "Zadanie2", Done = true }
                }
            };
        }
    }
}

using System;
namespace TaskListApp.Models
{
	public class RestResponse<T>
	{
		public bool IsSuccess { get; set; }
		public string ErrorMessage { get; set; }
		public T Data { get; set; }

		public RestResponse()
		{
			IsSuccess = true;
			ErrorMessage = string.Empty;
		}
	}
}

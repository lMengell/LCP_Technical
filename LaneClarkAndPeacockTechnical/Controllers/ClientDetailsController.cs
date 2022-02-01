using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LaneClarkAndPeacock.BusinessLogic;
using LaneClarkAndPeacock.Classes;
using LaneClarkAndPeacock.Classes.Internal.Requests;
using LaneClarkAndPeacock.Classes.Internal.Responses;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace LaneClarkAndPeacock.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class ClientDetailsController : ControllerBase
    {
        public ClientDetailsAdapter ClientDetailsAdapter { get; set; }

        private readonly ILogger<ClientDetailsController> _logger;

        public ClientDetailsController(ILogger<ClientDetailsController> logger)
        {
            _logger = logger;
            ClientDetailsAdapter = new ClientDetailsAdapter();
        }

        [HttpGet]
        public string HealthCheck()
        {
            return "Check!";
        }

        [HttpPost]
        public ClientDetailSearchResponse SearchClientDetails(ClientDetailSearchRequest request)
        {
            return ClientDetailsAdapter.SearchClientDetails(request);
        }

        [HttpPost]
        public ClientDetailCreateResponse CreateClientDetail(ClientDetailCreateRequest request)
        {
            return ClientDetailsAdapter.CreateClientDetail(request);
        }

        [HttpPost]
        public ClientDetailUpdateResponse UpdateClientDetail(ClientDetailUpdateRequest request)
        {
            return ClientDetailsAdapter.UpdateClientDetail(request);
        }

        [HttpPost]
        public ClientDetailDeleteResponse DeleteClientDetail(ClientDetailDeleteRequest request)
        {
            return ClientDetailsAdapter.DeleteClientDetail(request);
        }
    }
}

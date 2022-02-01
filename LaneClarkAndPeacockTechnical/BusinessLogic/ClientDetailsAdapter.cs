using System;
using System.Net;
using System.Linq;
using System.Collections.Generic;
using System.Net.Http;
using LaneClarkAndPeacock.Classes;
using LaneClarkAndPeacock.Classes.Internal.Requests;
using LaneClarkAndPeacock.Classes.Internal.Responses;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using LaneClarkAndPeacock.BusinessLogic.Workers;
using LaneClarkAndPeacockTechnical;

namespace LaneClarkAndPeacock.BusinessLogic
{
    public class ClientDetailsAdapter
    {
        private ClientDetailsWorker ClientDetailsWorker { get; set; }
        public ClientDetailsAdapter()
        {
            ClientDetailsWorker = new ClientDetailsWorker();
        }

        public ClientDetailCreateResponse CreateClientDetail(ClientDetailCreateRequest request)
        {
            if (request == null || !request.IsValid())
                return new ClientDetailCreateResponse()
                {
                    HasError = true,
                    ErrorMessage = "Create request invalid"
                };

            ClientDetailsWorker.CreateClientDetail(request);

            return new ClientDetailCreateResponse();
        }

        public ClientDetailSearchResponse SearchClientDetails(ClientDetailSearchRequest request)
        {
            if (request == null)
            {
                return new ClientDetailSearchResponse()
                {
                    ClientDetails = new List<ClientDetails>()
                };
            }

            var clientDetails = ClientDetailsWorker.SearchClientDetails(request);

            return new ClientDetailSearchResponse()
            {
                ClientDetails = clientDetails
            };
        }

        public ClientDetailUpdateResponse UpdateClientDetail(ClientDetailUpdateRequest request)
        {
            var badRequestResponse = new ClientDetailUpdateResponse()
            {
                HasError = true,
                ErrorMessage = "Invalid Update Request"
            };

            if (request == null || request.ClientDetailsId == Guid.Empty || !request.IsValid())
                return badRequestResponse;

            var clientDetail = ClientDetailsWorker.GetClientDetailById(request.ClientDetailsId);

            if (clientDetail == null)
                return badRequestResponse;

            ClientDetailsWorker.UpdateClientDetail(clientDetail, request);

            return new ClientDetailUpdateResponse();
        }

        public ClientDetailDeleteResponse DeleteClientDetail(ClientDetailDeleteRequest request) 
        {
            var badRequestResponse = new ClientDetailDeleteResponse()
            {
                HasError = true,
                ErrorMessage = "Invalid Delete Request"
            };

            if (request == null || request.ClientDetailsId == Guid.Empty)
                return badRequestResponse;

            var clientDetail = ClientDetailsWorker.GetClientDetailById(request.ClientDetailsId);

            if (clientDetail == null)
                return badRequestResponse;

            ClientDetailsWorker.DeleteClientDetail(clientDetail);

            return new ClientDetailDeleteResponse();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LaneClarkAndPeacock.Classes;
using LaneClarkAndPeacock.Classes.Internal.Requests;
using LaneClarkAndPeacock.Classes.Internal.Responses;
using LaneClarkAndPeacockTechnical;
using Microsoft.EntityFrameworkCore;

namespace LaneClarkAndPeacock.BusinessLogic.Workers
{
    public class ClientDetailsWorker
    {
        private DatabaseContext DatabaseContext { get; set; }

        public ClientDetailsWorker()
        {
            DatabaseContext = new DatabaseContext();
        }

        public ClientDetails GetClientDetailById(Guid clientDetailsId)
        {
            return DatabaseContext.ClientDetails.FirstOrDefault(x => x.ClientDetailsId == clientDetailsId);
        }

        public List<ClientDetails> SearchClientDetails(ClientDetailSearchRequest request)
        {
            IQueryable<ClientDetails> clientDetails = DatabaseContext.ClientDetails.AsQueryable();

            if (!string.IsNullOrWhiteSpace(request.FirstName))
            {
                clientDetails = clientDetails.Where(x => x.FirstName.Contains(request.FirstName));
            }

            if (!string.IsNullOrWhiteSpace(request.LastName))
            {
                clientDetails = clientDetails.Where(c => c.LastName.Contains(request.LastName));
            }

            return clientDetails.ToList();
        }

        public void CreateClientDetail(ClientDetailCreateRequest request)
        {
            var newClientDetails = new ClientDetails()
            {
                ClientDetailsId = Guid.NewGuid(),
                CreatedAt = DateTime.Now,
                LastUpdatedAt = DateTime.Now,
                FirstName = request.FirstName,
                LastName = request.LastName,
                EmailAddress = request.EmailAddress,
                PhoneNumber = request.PhoneNumber
            };

            DatabaseContext.ClientDetails.Add(newClientDetails);
            DatabaseContext.SaveChanges();
        }

        public void UpdateClientDetail(ClientDetails clientDetail, ClientDetailUpdateRequest request)
        {
            clientDetail.FirstName = request.FirstName;
            clientDetail.LastName = request.LastName;
            clientDetail.EmailAddress = request.EmailAddress;
            clientDetail.PhoneNumber = request.PhoneNumber;
            clientDetail.LastUpdatedAt = DateTime.Now;

            DatabaseContext.SaveChanges();
        }

        public void DeleteClientDetail(ClientDetails clientDetail)
        {
            DatabaseContext.ClientDetails.Remove(clientDetail);
            DatabaseContext.SaveChanges();
        }
    }
}

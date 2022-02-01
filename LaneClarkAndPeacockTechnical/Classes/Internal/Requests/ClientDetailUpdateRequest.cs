using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LaneClarkAndPeacock.Classes.Internal.Requests
{
    public class ClientDetailUpdateRequest : ClientDetailBaseRequest
    {
        public Guid ClientDetailsId { get; set; }
    }
}

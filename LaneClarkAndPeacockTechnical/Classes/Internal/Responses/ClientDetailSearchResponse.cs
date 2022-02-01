using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LaneClarkAndPeacockTechnical;

namespace LaneClarkAndPeacock.Classes.Internal.Responses
{
    public class ClientDetailSearchResponse : BaseResponse
    {
        public List<ClientDetails> ClientDetails { get; set; }
    }
}

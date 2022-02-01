using System;
using System.Net;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace LaneClarkAndPeacock.Classes.Internal.Responses
{
    public class BaseResponse
    {
        public BaseResponse()
        {
            HasError = false;
        }

        public bool HasError { get; set; }
        public string ErrorMessage { get; set; }
    }
}

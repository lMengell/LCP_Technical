using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace LaneClarkAndPeacock.Classes.Internal.Requests
{
    public class ClientDetailBaseRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public string PhoneNumber { get; set; }

        public bool IsValid()
        {
            if (string.IsNullOrWhiteSpace(FirstName))
                return false;

            if (string.IsNullOrWhiteSpace(LastName))
                return false;

            if (!Regex.IsMatch(EmailAddress, @"^[^@\s]+@[^@\s]+\.[^@\s]+$", RegexOptions.IgnoreCase, TimeSpan.FromMilliseconds(250)))
                return false;

            if (string.IsNullOrWhiteSpace(PhoneNumber))
                return false;

            return true;
        }
    }
}

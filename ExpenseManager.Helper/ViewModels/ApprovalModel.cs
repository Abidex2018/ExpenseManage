using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.Helper.ViewModels
{
    public class ApprovalModel
    {
        public string UserId { get; set; }
        public int RequisitionId { get; set; }
        public string Comment { get; set; }
        public bool RequiresExecutiveApproval { get; set; }

        public bool IsApproved { get; set; }

        public bool IsGmOrAccountHead { get; set; }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.Helper.ViewModels
{
    public class DashboardReportModel
    {
        public int TotalPendingRequisition { get; set; }
        public int TotalAwaitingGm { get; set; }
        public int TotalAwaitingAccountHead { get; set; }
        public int TotalAwaitingExecutive { get; set; }

        public int TotalRejected { get; set; }

        public int TotalPartialApproval { get; set; }

    }
}

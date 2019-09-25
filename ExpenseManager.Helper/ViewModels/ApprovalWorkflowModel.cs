using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.Helper.ViewModels
{
    public class ApprovalWorkflowModel
    {
        public int Id { get; set; }
      
        public string AspNetUserId { get; set; }
        public string UserName { get; set; }

        public int ExpenseRequisitionId { get; set; }
      
        public string Comment { get; set; }

        public DateTime DateCreated { get; set; }

        public int Status { get; set; }

        public string StatusLabel { get; set; }

    }
}

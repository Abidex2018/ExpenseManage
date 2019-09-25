using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.Helper.ViewModels
{
    public class DisbursementViewModel
    {
        public int Id { get; set; }
        public int RequisitionId { get; set; }
        public int CompanyId { get; set; }

        public string CompanyName { get; set; }
        public int CompanyDepartmentId { get; set; }
        public string DepartmentName { get; set; }

        public string RequestTitle { get; set; }

       
        public string ExpenseItemName { get; set; }

        public string Description { get; set; }

       

        public decimal TotalPaidout { get; set; }

        public decimal TotalAmount { get; set; }

        public decimal? ClossingBalance { get; set; }

        public decimal AmountToPay { get; set; }

        public decimal AmountPaid { get; set; }
        public decimal OpeningBalance { get; set; }
        
        public string BeneficiaryId { get; set; }

        public string ReceiverName { get; set; }
        public DateTime DateCreated { get; set; }
        
        public string CreatedBy { get; set; }

     
    }
}

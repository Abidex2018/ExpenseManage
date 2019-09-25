using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.Helper.ViewModels
{
    public class RequisitionViewModel
    {
        public int Id { get; set; }

        public int CompanyId { get; set; }
        public string CompanyName { get; set; }
        public int CompanyDepartmentId { get; set; }
        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }

        public string RequestTitle { get; set; }

        public int ExpenseItemId { get; set; }
        public string ExpenseItemName { get; set; }

        public string ExpenseDescription { get; set; }

        public int Quantity { get; set; }

        public decimal UnitPrice { get; set; }

        public decimal TotalAmount { get; set; }
        public decimal ?AmountSpent { get; set; }
        public decimal ?RetiredBalance { get; set; }
        public int ExpenseCategoryId { get; set; }

        public int ExpenseTypeId { get; set; }

        public string BeneficiaryId { get; set; }
        public string BeneficiaryName { get; set; }

        public DateTime DateCreated { get; set; }
        
        public string CreatedBy { get; set; }
        public string CreatedName { get; set; }

        public string StatusLabel { get; set; }
        public int Status { get; set; }
        public int WorkflowLevelId { get; set; }

        public int WorkflowEnumType { get; set; }
        
       
        public string ApprovalWorkflowNameWithLevel { get; set; }

        public string WorkflowLevel { get; set; }
        public bool IsApproved { get; set; }

        public bool UserCanApprove { get; set; }
        public bool CanPayOut { get; set; }
        public bool RequiresExecutiveApproval { get; set; }

        
        public List<DisbursementViewModel> DisbursementHistory { get; set; }

        public List<ApprovalWorkflowModel> ApprovalWorkflow { get; set; }
    }
    public class RequisitionSearchObj 
    {
        public int CompanyId { get; set; }
        public int DepartmentId { get; set; }
      
        public DateTime StartDate { get; set; }

        public DateTime StopDate { get; set; }
       
    }
}

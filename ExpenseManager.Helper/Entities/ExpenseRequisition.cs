namespace ExpenseManager.Helper.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ExpenseRequisition")]
    public partial class ExpenseRequisition
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ExpenseRequisition()
        {
            ExpenseDisbursements = new HashSet<ExpenseDisbursement>();
            RequisitionApprovalWorkflows = new HashSet<RequisitionApprovalWorkflow>();
        }

        public int Id { get; set; }

        public int CompanyDepartmentId { get; set; }

        [Required]
        [StringLength(50)]
        public string RequestTitle { get; set; }

        public int ExpenseItemId { get; set; }

        [Required]
        public string ExpenseDescription { get; set; }

        public int Quantity { get; set; }

        public decimal UnitPrice { get; set; }

        public decimal TotalAmount { get; set; }
        public decimal ?AmountSpent { get; set; }
        public decimal ?RetiredBalance { get; set; }

        [Required]
        [StringLength(128)]
        public string BeneficiaryId { get; set; }

        public DateTime DateCreated { get; set; }

        [Required]
        [StringLength(128)]
        public string CreatedBy { get; set; }

        [StringLength(128)]
        public string DisbursedBy { get; set; }

        public bool IsApproved { get; set; }
     

        public int WorkflowLevelId { get; set; }
        public bool IsPaymentCompleted { get; set; }
        public int Status { get; set; }
        
        public bool RequiresExecutiveApproval { get; set; }

        public virtual AspNetUser AspNetUser { get; set; }

        public virtual AspNetUser AspNetUser1 { get; set; }

        public virtual CompanyDepartment CompanyDepartment { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ExpenseDisbursement> ExpenseDisbursements { get; set; }

        public virtual ExpenseItem ExpenseItem { get; set; }

        public virtual Staff Staff { get; set; }

        public virtual WorkflowLevel WorkflowLevel { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RequisitionApprovalWorkflow> RequisitionApprovalWorkflows { get; set; }
    }
}

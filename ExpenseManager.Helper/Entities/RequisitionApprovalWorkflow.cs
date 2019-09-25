namespace ExpenseManager.Helper.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("RequisitionApprovalWorkflow")]
    public partial class RequisitionApprovalWorkflow
    {
        public int Id { get; set; }

        [Required]
        [StringLength(128)]
        public string AspNetUserId { get; set; }

        public int ExpenseRequisitionId { get; set; }

        [Required]
        [StringLength(128)]
        public string Comment { get; set; }

        public DateTime DateCreated { get; set; }

        public int Status { get; set; }

        public virtual AspNetUser AspNetUser { get; set; }

        public virtual ExpenseRequisition ExpenseRequisition { get; set; }
    }
}

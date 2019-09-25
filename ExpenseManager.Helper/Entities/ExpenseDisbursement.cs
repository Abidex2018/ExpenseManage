namespace ExpenseManager.Helper.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ExpenseDisbursement")]
    public partial class ExpenseDisbursement
    {
        public int Id { get; set; }

        public int ExpenseRequisitionId { get; set; }

        public decimal OpeningBalance { get; set; }

        public decimal AmountPaid { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public decimal? Balance { get; set; }

        [Required]
        [StringLength(128)]
        public string ReceiverId { get; set; }

        [Required]
        [StringLength(128)]
        public string Description { get; set; }

        public DateTime DateCreated { get; set; }

        public virtual ExpenseRequisition ExpenseRequisition { get; set; }

        public virtual Staff Staff { get; set; }
    }
}

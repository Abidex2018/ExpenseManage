namespace ExpenseManager.Helper.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("UserCompany")]
    public partial class UserCompany
    {
        [Key]
        public int User_CompanyId { get; set; }

        [Required]
        [StringLength(128)]
        public string UserId { get; set; }

        public int CompanyId { get; set; }

        public virtual Company Company { get; set; }
    }
}

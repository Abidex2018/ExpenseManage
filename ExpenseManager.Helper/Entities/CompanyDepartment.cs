namespace ExpenseManager.Helper.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("CompanyDepartment")]
    public partial class CompanyDepartment
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CompanyDepartment()
        {
            AspNetUsers = new HashSet<AspNetUser>();
            ExpenseRequisitions = new HashSet<ExpenseRequisition>();
        }

        public int Id { get; set; }

        public int DepartmentId { get; set; }

        public int CompanyId { get; set; }

        public bool IsActive { get; set; }

        public bool CanCreateRequestForOtherDept { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AspNetUser> AspNetUsers { get; set; }

        public virtual Company Company { get; set; }

        public virtual Department Department { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ExpenseRequisition> ExpenseRequisitions { get; set; }
    }
}

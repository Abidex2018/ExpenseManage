namespace ExpenseManager.Helper.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("UserRole")]
    public partial class UserRole
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public UserRole()
        {
            AspNetUsers = new HashSet<AspNetUser>();
        }

        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        public bool IsAdmin { get; set; }

        public bool IsHOD { get; set; }

        public bool IsGM { get; set; }
        public bool IsOtherUser { get; set; }

        public bool IsAccountHead { get; set; }

        public bool IsEzecutive { get; set; }

        public int? WorkflowLevelId { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AspNetUser> AspNetUsers { get; set; }

        public virtual WorkflowLevel WorkflowLevel { get; set; }
    }
}

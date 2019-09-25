namespace ExpenseManager.Helper.Entities
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class ExpenseManagerEntities : DbContext
    {
        public ExpenseManagerEntities()
            : base("name=ExpenseManagerEntities")
        {
        }

        public virtual DbSet<AspNetRole> AspNetRoles { get; set; }
        public virtual DbSet<AspNetUserClaim> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogin> AspNetUserLogins { get; set; }
        public virtual DbSet<AspNetUser> AspNetUsers { get; set; }
        public virtual DbSet<Company> Companies { get; set; }
        public virtual DbSet<CompanyDepartment> CompanyDepartments { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<ExpenseCategory> ExpenseCategories { get; set; }
        public virtual DbSet<ExpenseDisbursement> ExpenseDisbursements { get; set; }
        public virtual DbSet<ExpenseItem> ExpenseItems { get; set; }
        public virtual DbSet<ExpenseRequisition> ExpenseRequisitions { get; set; }
        public virtual DbSet<ExpenseType> ExpenseTypes { get; set; }
        public virtual DbSet<RequisitionApprovalWorkflow> RequisitionApprovalWorkflows { get; set; }
       // public virtual DbSet<UserCompany> UserCompanies { get; set; }
        public virtual DbSet<Staff> Staffs { get; set; }
        public virtual DbSet<UserRole> UserRoles { get; set; }
        public virtual DbSet<WorkflowLevel> WorkflowLevels { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AspNetRole>()
                .HasMany(e => e.AspNetUsers)
                .WithMany(e => e.AspNetRoles)
                .Map(m => m.ToTable("AspNetUserRoles").MapLeftKey("RoleId").MapRightKey("UserId"));

            modelBuilder.Entity<AspNetUser>()
                .HasMany(e => e.AspNetUserClaims)
                .WithRequired(e => e.AspNetUser)
                .HasForeignKey(e => e.UserId);

            modelBuilder.Entity<AspNetUser>()
                .HasMany(e => e.AspNetUserLogins)
                .WithRequired(e => e.AspNetUser)
                .HasForeignKey(e => e.UserId);

            modelBuilder.Entity<AspNetUser>()
                .HasMany(e => e.ExpenseRequisitions)
                .WithRequired(e => e.AspNetUser)
                .HasForeignKey(e => e.CreatedBy)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<AspNetUser>()
                .HasMany(e => e.ExpenseRequisitions1)
                .WithOptional(e => e.AspNetUser1)
                .HasForeignKey(e => e.DisbursedBy);

            modelBuilder.Entity<AspNetUser>()
                .HasMany(e => e.RequisitionApprovalWorkflows)
                .WithRequired(e => e.AspNetUser)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<AspNetUser>()
                .HasOptional(e => e.Staff)
                .WithRequired(e => e.AspNetUser);

            modelBuilder.Entity<Company>()
                .HasMany(e => e.CompanyDepartments)
                .WithRequired(e => e.Company)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<CompanyDepartment>()
                .HasMany(e => e.AspNetUsers)
                .WithRequired(e => e.CompanyDepartment)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<CompanyDepartment>()
                .HasMany(e => e.ExpenseRequisitions)
                .WithRequired(e => e.CompanyDepartment)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Department>()
                .HasMany(e => e.CompanyDepartments)
                .WithRequired(e => e.Department)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ExpenseCategory>()
                .HasMany(e => e.ExpenseTypes)
                .WithRequired(e => e.ExpenseCategory)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ExpenseDisbursement>()
                .Property(e => e.OpeningBalance)
                .HasPrecision(18, 0);

            modelBuilder.Entity<ExpenseDisbursement>()
                .Property(e => e.AmountPaid)
                .HasPrecision(18, 0);

            modelBuilder.Entity<ExpenseDisbursement>()
                .Property(e => e.Balance)
                .HasPrecision(19, 0);

            modelBuilder.Entity<ExpenseItem>()
                .HasMany(e => e.ExpenseRequisitions)
                .WithRequired(e => e.ExpenseItem)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ExpenseRequisition>()
                .Property(e => e.UnitPrice)
                .HasPrecision(18, 0);

            modelBuilder.Entity<ExpenseRequisition>()
                .Property(e => e.TotalAmount)
                .HasPrecision(18, 0);

            modelBuilder.Entity<ExpenseRequisition>()
                .HasMany(e => e.ExpenseDisbursements)
                .WithRequired(e => e.ExpenseRequisition)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ExpenseRequisition>()
                .HasMany(e => e.RequisitionApprovalWorkflows)
                .WithRequired(e => e.ExpenseRequisition)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<ExpenseType>()
                .HasMany(e => e.ExpenseItems)
                .WithRequired(e => e.ExpenseType)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Staff>()
                .HasMany(e => e.ExpenseDisbursements)
                .WithRequired(e => e.Staff)
                .HasForeignKey(e => e.ReceiverId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Staff>()
                .HasMany(e => e.ExpenseRequisitions)
                .WithRequired(e => e.Staff)
                .HasForeignKey(e => e.BeneficiaryId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<WorkflowLevel>()
                .HasMany(e => e.ExpenseRequisitions)
                .WithRequired(e => e.WorkflowLevel)
                .WillCascadeOnDelete(false);
        }
    }
}

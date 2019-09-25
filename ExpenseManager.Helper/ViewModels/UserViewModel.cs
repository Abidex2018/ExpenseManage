using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.Helper.ViewModels
{
    public class UserViewModel
    {
        public string Id { get; set; }

        public int UserId { get; set; }
        public string Email { get; set; }

        public bool EmailConfirmed { get; set; }

      
        public string PhoneNumber { get; set; }
 
        public string UserName { get; set; }

      
        public string FirstName { get; set; }

      
        public string LastName { get; set; }

        public int? UserRoleId { get; set; }

        public int UserRoleTypeId { get; set; }

        public string UserRoleName { get; set; }

        public int Status { get; set; }

        public int CompanyId { get; set; }
        public int DepartmentId { get; set; }
        public string CompanyName { get; set; }

        public string DepartmentName { get; set; }
        
        public int? CompanyDepartmentId { get; set; }

        public bool HasChangePaqssword { get; set; }

        public bool IsOtherUser { get; set; }
        public bool IsAdmin { get; set; }

        public bool IsGeneralManager { get; set; }

        public bool IsHeadOfAccount { get; set; }
        public bool IsHod { get; set; }
        public bool IsExecutive { get; set; }

        public bool CanMakePayment { get; set; }
        public bool IsActive { get; set; }
        public bool CanCreateRequestForOtherDept { get; set; }
        
        public string ActiveLabel { get; set; }

        public int? ApprovalWorkflowLevelId { get; set; }
        public IEnumerable<UserCompany> UserCompaniesList { get; set; }
    }

    public class UserCompany
    {
        public int User_CompanyId { get; set; }
        public string UserId { get; set; }

        public int CompanyId { get; set; }
    }
}

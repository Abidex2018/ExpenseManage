using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.Helper.ViewModels
{
    public class StaffViewModel
    {
      

        public string AspNetUserId { get; set; }
       
        public string Designation { get; set; }
        public int CompanyId { get; set; }
        public string CompanyName { get; set; }

        public string FirstName { get; set; }

        public string FullName { get; set; }
        public string LastName { get; set; }

      
        public string PhoneNumber { get; set; }

        public string DepartmentName { get; set; }

        public int? CompanyDepartmentId { get; set; }

        public bool IsActive { get; set; }

        public string ActiveLabel { get; set; }

    }
}

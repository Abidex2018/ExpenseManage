using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.Helper.ViewModels
{
    public class DepartmentViewModel
    {
        public int Id { get; set; }
 
        public string Name { get; set; }

        public string Description { get; set; }

        public string CompanyName { get; set; }
        public int DepartmentId { get; set; }

        public int CompanyId { get; set; }

        public bool IsActive { get; set; }
        public string ActiveLabel { get; set; }
        public bool CanCreateRequestForOtherDept { get; set; }
    }
}

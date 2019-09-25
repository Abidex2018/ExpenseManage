using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.Helper.ViewModels
{
    public class UserRoleModel
    {
        public int Id { get; set; }
      
        public string Name { get; set; }
        public string RoleType { get; set; }
        public bool IsAdmin { get; set; }
        public bool IsHOD { get; set; }
        public string ApprovalLevel { get; set; }

        public int? WorkflowLevelId { get; set; }

    }
}

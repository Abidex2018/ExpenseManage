using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.Helper.ViewModels
{
    public class ExpenceTypeViewModel
    {
        public int Id { get; set; }

       
        public string ExpenseCategoryName { get; set; }

      
        public string Name { get; set; }

        public int ExpenseCategoryId { get; set; }
        public bool IsActive { get; set; }

        public string ActiveLabel { get; set; }
    }
}

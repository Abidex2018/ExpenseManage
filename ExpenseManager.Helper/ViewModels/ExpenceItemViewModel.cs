using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.Helper.ViewModels
{
    public class ExpenceItemViewModel
    {
        public int Id { get; set; }

       
        public string ExpenseTypeName { get; set; }

      
        public string Name { get; set; }

        public int ExpenseTypeId { get; set; }

        public int ExpenseCategoryId { get; set; }

        public string ExpenseCategoryName { get; set; }

        public bool IsActive { get; set; }
        public string ActiveLabel { get; set; }
    }
}

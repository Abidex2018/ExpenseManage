using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ExpenseManager.Helper.Entities;
using ExpenseManager.Helper.ViewModels;

namespace ExpenseManager.Helper.Repositories
{
    public class CompanyRepository
    {
        private readonly ExpenseManagerEntities _dBContext;
        public CompanyRepository()
        {
            this._dBContext = new ExpenseManagerEntities();
        }
        public List<LookupModel> GetLookup()
        {
            try
            {
                var expenseLists = _dBContext.Companies.ToList();

                return expenseLists.Select(item => new LookupModel
                {
                    
                    Id = item.Id,
                    Name = item.Name                 

                }).ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
       
    }
}

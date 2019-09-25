using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ExpenseManager.Helper.Entities;
using ExpenseManager.Helper.ViewModels;

namespace ExpenseManager.Helper.Repositories
{
    public class ExpenseCategoryRepository
    {
        private readonly ExpenseManagerEntities _dBContext;
        public ExpenseCategoryRepository()
        {
            this._dBContext = new ExpenseManagerEntities();
        }

        public List<ExpenceCategoryViewModel> GetAll()
        {
            try
            {
                var expenseLists = _dBContext.ExpenseCategories.ToList();

                return expenseLists.Select(item => new ExpenceCategoryViewModel
                {

                    Id = item.Id,
                    Name = item.Name,
                    ActiveLabel = item.IsActive ? "Active" : "Inactive",
                    IsActive = item.IsActive

                }).OrderByDescending(m => m.Id).ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
        public List<LookupModel> GetLookup()
        {
            try
            {
                var expenseLists = _dBContext.ExpenseCategories.Where(c => c.IsActive).ToList();

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
        public ExpenceCategoryViewModel GetById(int expenseCategoryId)
        {
            var entity = _dBContext.ExpenseCategories.Find(expenseCategoryId);
            if (entity != null)
            {
                var returnData = new ExpenceCategoryViewModel
                {

                    Id = entity.Id,
                    Name = entity.Name,
                    ActiveLabel = entity.IsActive ? "Active" : "Inactive",
                    IsActive = entity.IsActive

                };

                return returnData;
            }
            throw new Exception("Item NOT found!");
        }

        public void Create(ExpenceCategoryViewModel model)
        {
            try
            {
                var requisition = new ExpenseCategory();
                requisition.Name = model.Name;
                requisition.IsActive = true;

                _dBContext.ExpenseCategories.Add(requisition);
                _dBContext.SaveChanges();
            }
            catch (Exception e)
            {
                throw;
            }
        }
        public void Update(ExpenceCategoryViewModel model)
        {
            try
            {
                var item = _dBContext.ExpenseCategories.Find(model.Id);
                if (item == null)
                {
                    throw new Exception("Item NOT found!");
                }

               
                item.Name = model.Name;
                item.IsActive = model.IsActive;
                _dBContext.SaveChanges();
            }
            catch (Exception e)
            {
                throw;
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ExpenseManager.Helper.Entities;
using ExpenseManager.Helper.ViewModels;

namespace ExpenseManager.Helper.Repositories
{
    public class ExpenseTypeRepository
    {
        private readonly ExpenseManagerEntities _dBContext;
        public ExpenseTypeRepository()
        {
            this._dBContext = new ExpenseManagerEntities();
        }
        public List<ExpenceTypeViewModel> GetAll()
        {
            try
            {
                var expenseLists = _dBContext.ExpenseTypes.ToList();

                return expenseLists.Select(item => new ExpenceTypeViewModel
                {

                    Id = item.Id,
                    Name = item.Name,
                    ExpenseCategoryId = item.ExpenseCategoryId,
                    ExpenseCategoryName = item.ExpenseCategory.Name,
                    ActiveLabel = item.IsActive ? "Active" : "Inactive",
                    IsActive = item.IsActive

                }).ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public List<ExpenceTypeViewModel> GetAllByCategory(int categoryId)
        {
            try
            {
                var expenseLists = _dBContext.ExpenseTypes.Where(m=>m.ExpenseCategoryId == categoryId).ToList();

                return expenseLists.Select(item => new ExpenceTypeViewModel
                {

                    Id = item.Id,
                    Name = item.Name,
                    ExpenseCategoryId = item.ExpenseCategoryId,
                    ExpenseCategoryName = item.ExpenseCategory.Name,
                    ActiveLabel = item.IsActive ? "Active" : "Inactive",
                    IsActive = item.IsActive

                }).OrderByDescending(m => m.Id).ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
        public List<LookupModel> GetLookup(int expenseCategoryId)
        {
            try
            {
                var expenseLists = _dBContext.ExpenseTypes.Where(x => x.IsActive && x.ExpenseCategoryId == expenseCategoryId).ToList();

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
        public ExpenceTypeViewModel GetById(int expenseTypeId)
        {
            var entity = _dBContext.ExpenseTypes.Find(expenseTypeId);
            if (entity != null)
            {
                var returnData = new ExpenceTypeViewModel
                {

                    Id = entity.Id,
                    Name = entity.Name,
                    ExpenseCategoryId = entity.ExpenseCategoryId,
                    ExpenseCategoryName = entity.ExpenseCategory.Name,
                    ActiveLabel = entity.IsActive ? "Active" : "Inactive",
                    IsActive = entity.IsActive

                };

                return returnData;
            }
            throw new Exception("Item NOT found!");
        }

        public void Create(ExpenceTypeViewModel model)
        {
            try
            {
                var item = new ExpenseType();
                item.Name = model.Name;
                item.ExpenseCategoryId = model.ExpenseCategoryId;
                item.IsActive = true;
                _dBContext.ExpenseTypes.Add(item);
                _dBContext.SaveChanges();
            }
            catch (Exception e)
            {
                throw;
            }
        }
        public void Update(ExpenceTypeViewModel model)
        {
            try
            {
                var item = _dBContext.ExpenseTypes.Find(model.Id);
                if (item == null)
                {
                    throw new Exception("Item NOT found!");
                }


                item.Name = model.Name;
                item.IsActive = model.IsActive;
                item.ExpenseCategoryId = model.ExpenseCategoryId;
                _dBContext.SaveChanges();
            }
            catch (Exception e)
            {
                throw;
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ExpenseManager.Helper.Entities;
using ExpenseManager.Helper.ViewModels;

namespace ExpenseManager.Helper.Repositories
{
    public class ExpenseItemRepository
    {
        private readonly ExpenseManagerEntities _dBContext;
        public ExpenseItemRepository()
        {
            this._dBContext = new ExpenseManagerEntities();
        }
        public List<ExpenceItemViewModel> GetAll()
        {
            try
            {
                var expenseLists = _dBContext.ExpenseItems.ToList();

                return expenseLists.Select(item => new ExpenceItemViewModel
                {

                    Id = item.Id,
                    Name = item.Name,
                    ExpenseTypeId = item.ExpenseTypeId,
                    ExpenseTypeName = item.ExpenseType.Name,
                    ExpenseCategoryName = item.ExpenseType.ExpenseCategory.Name,
                    ActiveLabel = item.IsActive ? "Active" : "Inactive",
                    IsActive = item.IsActive

                }).ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
        public List<ExpenceItemViewModel> GetAllCategoryOrType(int categoryId,int typeId)
        {
            try
            {
                if (categoryId == 0 )
                {
                    var expenseLists = _dBContext.ExpenseItems.Where(m=>m.ExpenseTypeId == typeId).ToList();
                    return expenseLists.Select(item => new ExpenceItemViewModel
                    {

                        Id = item.Id,
                        Name = item.Name,
                        ExpenseTypeId = item.ExpenseTypeId,
                        ExpenseTypeName = item.ExpenseType.Name,
                        ExpenseCategoryName = item.ExpenseType.ExpenseCategory.Name,
                        ActiveLabel = item.IsActive ? "Active" : "Inactive",
                        IsActive = item.IsActive

                    }).ToList();
                }
                else if(typeId == 0)
                {
                    var expenseLists = _dBContext.ExpenseItems.Where(m => m.ExpenseType.ExpenseCategoryId == categoryId).ToList();
                    return expenseLists.Select(item => new ExpenceItemViewModel
                    {

                        Id = item.Id,
                        Name = item.Name,
                        ExpenseTypeId = item.ExpenseTypeId,
                        ExpenseTypeName = item.ExpenseType.Name,
                        ExpenseCategoryName = item.ExpenseType.ExpenseCategory.Name,
                        ActiveLabel = item.IsActive ? "Active" : "Inactive",
                        IsActive = item.IsActive

                    }).ToList();
                }
                else
                {
                    var expenseLists = _dBContext.ExpenseItems.Where(m=>m.ExpenseTypeId == typeId && m.ExpenseType.ExpenseCategoryId == categoryId).ToList();

                    return expenseLists.Select(item => new ExpenceItemViewModel
                    {

                        Id = item.Id,
                        Name = item.Name,
                        ExpenseTypeId = item.ExpenseTypeId,
                        ExpenseTypeName = item.ExpenseType.Name,
                        ExpenseCategoryName = item.ExpenseType.ExpenseCategory.Name,
                        ActiveLabel = item.IsActive ? "Active" : "Inactive",
                        IsActive = item.IsActive

                    }).OrderByDescending(m => m.Id).ToList();
                }
               
            }
            catch (Exception)
            {
                throw;
            }
        }
        public List<LookupModel> GetLookup(int expenseTypeId)
        {
            try
            {
                var expenseLists = _dBContext.ExpenseItems.Where(x => x.IsActive && x.ExpenseTypeId == expenseTypeId).ToList();

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
        public ExpenceItemViewModel GetById(int expenseTypeId)
        {
            var entity = _dBContext.ExpenseItems.Find(expenseTypeId);
            if (entity != null)
            {
                var returnData = new ExpenceItemViewModel
                {

                    Id = entity.Id,
                    Name = entity.Name,
                    ExpenseTypeId = entity.ExpenseTypeId,
                    ExpenseCategoryId = entity.ExpenseType.ExpenseCategoryId,
                    ActiveLabel = entity.IsActive ? "Active" : "Inactive",
                    IsActive = entity.IsActive

                };

                return returnData;
            }
            throw new Exception("Item NOT found!");
        }

        public void Create(ExpenceItemViewModel model)
        {
            try
            {
                var item = new ExpenseItem();
                item.Name = model.Name;
                item.ExpenseTypeId = model.ExpenseTypeId;
                item.IsActive = true;
                _dBContext.ExpenseItems.Add(item);
                _dBContext.SaveChanges();
            }
            catch (Exception e)
            {
                throw;
            }
        }
        public void Update(ExpenceItemViewModel model)
        {
            try
            {
                var item = _dBContext.ExpenseItems.Find(model.Id);
                if (item == null)
                {
                    throw new Exception("Item NOT found!");
                }

                item.IsActive = model.IsActive;
                item.Name = model.Name;
                item.ExpenseTypeId = model.ExpenseTypeId;
                _dBContext.SaveChanges();
            }
            catch (Exception e)
            {
                throw;
            }
        }
    }
}

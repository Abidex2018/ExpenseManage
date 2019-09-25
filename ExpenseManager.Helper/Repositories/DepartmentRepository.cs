using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ExpenseManager.Helper.Entities;
using ExpenseManager.Helper.ViewModels;

namespace ExpenseManager.Helper.Repositories
{
    public class DepartmentRepository
    {
        private readonly ExpenseManagerEntities _dBContext;
        public DepartmentRepository()
        {
            this._dBContext = new ExpenseManagerEntities();
        }
        public List<DepartmentViewModel> GetAll()
        {
            try
            {
                var expenseLists = _dBContext.Departments.ToList();

                return expenseLists.Select(item => new DepartmentViewModel
                {

                    Id = item.Id,
                    Name = item.Name,
                    IsActive = item.IsActive,
                    Description = item.Description,
                    ActiveLabel = item.IsActive ? "Active" : "Inactive"
                    

                }).ToList();
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
                var expenseLists = _dBContext.Departments.Where(c => c.IsActive).ToList();

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
        public DepartmentViewModel GetById(int departmentId)
        {
            var entity = _dBContext.Departments.Find(departmentId);
            if (entity != null)
            {
                var returnData = new DepartmentViewModel
                {
                  
                    Id = entity.Id,
                    Name = entity.Name,               
                    Description = entity.Description,
                    IsActive = entity.IsActive


                };

                return returnData;
            }
            throw new Exception("Item NOT found!");
        }

        public void Create(DepartmentViewModel model)
        {
            try
            {
                var item = new Department();
                item.Name = model.Name;
                item.Description = model.Description;
                item.IsActive = true;
                _dBContext.Departments.Add(item);
                _dBContext.SaveChanges();
            }
            catch (Exception e)
            {
                throw;
            }
        }
        public void Update(DepartmentViewModel model)
        {
            try
            {
                var item = _dBContext.Departments.Find(model.Id);
                if (item == null)
                {
                    throw new Exception("Item NOT found!");
                }

                item.Description = model.Description;
                item.Name = model.Name;
                item.IsActive = model.IsActive;
                _dBContext.SaveChanges();
            }
            catch (Exception e)
            {
                throw;
            }
        }
        public void Delete(int id)
        {
            try
            {
                var itemToDelete = _dBContext.Departments.Find(id);
                if (itemToDelete != null)
                {
                    if (_dBContext.CompanyDepartments.Any(c => c.DepartmentId == id))
                    {
                        throw new Exception("Sorry, this item has been used.");
                    }
                    _dBContext.Departments.Remove(itemToDelete);
                    _dBContext.SaveChanges();
                }

            }
            catch (Exception e)
            {
                throw;
            }
        }
    }
}

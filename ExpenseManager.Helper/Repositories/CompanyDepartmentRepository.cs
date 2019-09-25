using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ExpenseManager.Helper.Entities;
using ExpenseManager.Helper.ViewModels;

namespace ExpenseManager.Helper.Repositories
{
    public class CompanyDepartmentRepository
    {
        private readonly ExpenseManagerEntities _dBContext;
        public CompanyDepartmentRepository()
        {
            this._dBContext = new ExpenseManagerEntities();
        }
        public List<DepartmentViewModel> GetAll()
        {
            try
            {
                var expenseLists = _dBContext.CompanyDepartments.ToList();

                return expenseLists.Select(item => new DepartmentViewModel
                {

                    Id = item.Id,
                    Name = item.Department.Name,
                    CompanyName = item.Company.Name,
                    CompanyId = item.CompanyId,
                    DepartmentId = item.DepartmentId,
                    ActiveLabel = item.IsActive ? "Active" : "Inactive",
                    IsActive = item.IsActive,
                    CanCreateRequestForOtherDept = item.CanCreateRequestForOtherDept


                }).ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
        public List<DepartmentViewModel> GetAllByCompany(int companyId)
        {
            try
            {
                var expenseLists = _dBContext.CompanyDepartments.Where(c=>c.Company.Id == companyId).ToList();

                return expenseLists.Select(item => new DepartmentViewModel
                {

                    Id = item.Id,
                    Name = item.Department.Name,
                    CompanyName = item.Company.Name,
                    CompanyId = item.CompanyId,
                    DepartmentId = item.DepartmentId,
                    ActiveLabel = item.IsActive ? "Active" : "Inactive",
                    IsActive = item.IsActive,
                    CanCreateRequestForOtherDept = item.CanCreateRequestForOtherDept


                }).OrderByDescending(m => m.Id).ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
        public List<LookupModel> GetLookup(int companyId)

        {
            try
            {

               
                var expenseLists = _dBContext.CompanyDepartments.Where(c => c.CompanyId == companyId).ToList();

                if (expenseLists.Any())
                {
                    return expenseLists?.Select(item => new LookupModel
                    {

                        Id = item.Id,
                        Name = item.Department.Name

                    }).ToList();
                }
                return new List<LookupModel>();
            }
            catch (Exception)
            {
                throw;
            }
        }
        public List<LookupModel> GetLookupdepartment(int companyId)
        {
            try
            {

                var expenseLists = _dBContext.CompanyDepartments.Where(c => c.CompanyId == companyId).ToList();

                if (expenseLists.Any())
                {
                    return expenseLists?.Select(item => new LookupModel
                    {

                        Id = item.DepartmentId,
                        Name = item.Department.Name

                    }).ToList();
                }
                return new List<LookupModel>();
            }
            catch (Exception)
            {
                throw;
            }
        }
        public DepartmentViewModel GetById(int departmentId)
        {
            var entity = _dBContext.CompanyDepartments.Find(departmentId);
            if (entity != null)
            {
                var returnData = new DepartmentViewModel
                {
                  
                    Id = entity.Id,
                    Name = entity.Department.Name,               
                    CompanyName = entity.Company.Name,
                    CompanyId = entity.CompanyId,
                    DepartmentId = entity.DepartmentId,
                    IsActive = entity.IsActive,
                    CanCreateRequestForOtherDept = entity.CanCreateRequestForOtherDept
        
                };

                return returnData;
            }
            throw new Exception("Item NOT found!");
        }

        public void Create(DepartmentViewModel model)
        {
            try
            {
                var item = new CompanyDepartment();

                item.DepartmentId = model.DepartmentId;
                item.CompanyId = model.CompanyId;
                item.IsActive = true;
                item.CanCreateRequestForOtherDept = model.CanCreateRequestForOtherDept;
                _dBContext.CompanyDepartments.Add(item);
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
                var item = _dBContext.CompanyDepartments.Find(model.Id);
                if (item == null)
                {
                    throw new Exception("Item NOT found!");
                }

                item.CompanyId = model.CompanyId;
                item.DepartmentId = model.DepartmentId;
                item.IsActive = model.IsActive;
                item.CanCreateRequestForOtherDept = model.CanCreateRequestForOtherDept;
                _dBContext.SaveChanges();
            }
            catch (Exception e)
            {
                throw;
            }
        }
    }
}

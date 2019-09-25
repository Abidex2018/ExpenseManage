using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ExpenseManager.Helper.Entities;
using ExpenseManager.Helper.ViewModels;

namespace ExpenseManager.Helper.Repositories
{
    public class StaffRepository
    {
        private readonly ExpenseManagerEntities _dBContext;
        public StaffRepository()
        {
            this._dBContext = new ExpenseManagerEntities();
        }
        public List<StaffViewModel> GetAll()
        {
            try
            {
                var expenseLists = _dBContext.Staffs.ToList();

                return expenseLists.Select(item => new StaffViewModel
                {

                    AspNetUserId = item.AspNetUserId,
                    FirstName = item.AspNetUser.FirstName,
                    LastName = item.AspNetUser.LastName,
                    FullName = item.AspNetUser.LastName + " " + item.AspNetUser.FirstName,
                    DepartmentName = item.AspNetUser.CompanyDepartment.Department.Name,
                    Designation = item.Designation,
                    CompanyName = item.AspNetUser.CompanyDepartment.Company.Name,
                    ActiveLabel = item.AspNetUser.IsActive ? "Active" : "Inactive",
                    IsActive = item.AspNetUser.IsActive

                }).ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
        public List<LookupModel> GetLookup(int compDepartmentId)
        {
            try
            {
                var expenseLists = _dBContext.Staffs.Where(c => c.AspNetUser.CompanyDepartmentId == compDepartmentId).ToList();

                return expenseLists.Select(item => new LookupModel
                {

                    Value = item.AspNetUserId,
                    Name = item.AspNetUser.LastName + " " + item.AspNetUser.FirstName                 

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
                var expenseLists = _dBContext.Staffs.ToList();

                return expenseLists.Select(item => new LookupModel
                {

                    Value = item.AspNetUserId,
                    Name = item.AspNetUser.LastName + " " + item.AspNetUser.FirstName

                }).ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
        public StaffViewModel GetById(string staffId)
        {
            var entity = _dBContext.Staffs.Find(staffId);
            if (entity != null)
            {
                var returnData = new StaffViewModel
                {

                    AspNetUserId = entity.AspNetUserId,
                    FirstName = entity.AspNetUser.FirstName,
                    LastName = entity.AspNetUser.LastName,
                    FullName = entity.AspNetUser.LastName + " " + entity.AspNetUser.FirstName,
                    CompanyDepartmentId = entity.AspNetUser.CompanyDepartmentId,
                    DepartmentName = entity.AspNetUser.CompanyDepartment.Department.Name,
                    Designation = entity.Designation,
                    CompanyName = entity.AspNetUser.CompanyDepartment.Company.Name,
                    ActiveLabel = entity.AspNetUser.IsActive ? "Active" : "Inactive",
                    IsActive = entity.AspNetUser.IsActive,
                    CompanyId = entity.AspNetUser.CompanyDepartment.CompanyId,
                   
                };

                return returnData;
            }
            throw new Exception("SORRY, YOU HAVE NOT BEEN ACTIVATED To MAKE REQUISITION !");
        }
        public List<StaffViewModel> GetByCompany(int companyId)
        {
            var staffList = _dBContext.Staffs.Where(c=>c.AspNetUser.CompanyDepartment.CompanyId == companyId).ToList();
            if (staffList.Any())
            {
                return staffList.Select(item => new StaffViewModel
                {
                    AspNetUserId = item.AspNetUserId,
                    FirstName = item.AspNetUser.FirstName,
                    LastName = item.AspNetUser.LastName,
                    FullName = item.AspNetUser.LastName + " " + item.AspNetUser.FirstName,
                    CompanyDepartmentId = item.AspNetUser.CompanyDepartmentId,
                    DepartmentName = item.AspNetUser.CompanyDepartment.Department.Name,
                    Designation = item.Designation,
                    CompanyName = item.AspNetUser.CompanyDepartment.Company.Name,
                    ActiveLabel = item.AspNetUser.IsActive ? "Active" : "Inactive",
                    IsActive = item.AspNetUser.IsActive,
                    CompanyId = item.AspNetUser.CompanyDepartment.CompanyId,
                }).OrderByDescending(m => m.AspNetUserId).ToList();
            
            }
            else
            {
                throw new Exception("No Record Found !");
            }
          
        }

        public void Create(StaffViewModel model)
        {
            try
            {
                var requisition = new Staff();
                       
                requisition.AspNetUserId = model.AspNetUserId;
                requisition.Designation = model.Designation;
 
                _dBContext.Staffs.Add(requisition);
                _dBContext.SaveChanges();
            }
            catch (Exception e)
            {
                throw;
            }
        }
        public void Update(StaffViewModel model)
        {
            try
            {
                var item = _dBContext.Staffs.Find(model.AspNetUserId);
                if (item == null)
                {
                    throw new Exception("Item NOT found!");
                }

                item.Designation = model.Designation;
             
                _dBContext.SaveChanges();
            }
            catch (Exception e)
            {
                throw;
            }
        }
    }
}

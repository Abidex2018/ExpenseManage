                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ExpenseManager.Helper.Entities;
using ExpenseManager.Helper.Utilities;
using ExpenseManager.Helper.ViewModels;

namespace ExpenseManager.Helper.Repositories
{
    public class UserRepository
    {
        private readonly ExpenseManagerEntities _dBContext;
        public UserRepository()
        {
            this._dBContext = new ExpenseManagerEntities();
        }
        public List<UserViewModel> GetAll()
        {
            try
            {
                var expenseLists = _dBContext.AspNetUsers.ToList();

                return expenseLists.Select(item => new UserViewModel
                {

                    Id  = item.Id,
                    Email = item.Email,
                    FirstName = item.FirstName,
                    LastName = item.LastName,
                    PhoneNumber = item.PhoneNumber,
                    CompanyName = item.CompanyDepartment.Company.Name,
                    CompanyId = item.CompanyDepartment.CompanyId,
                    CompanyDepartmentId = item.CompanyDepartmentId,
                    UserRoleId = item.UserRoleId,
                    UserRoleName = item.UserRole?.Name,
                    CanMakePayment = item.CanMakePayment,
                    DepartmentName = item.CompanyDepartment.Department.Name,
                    IsAdmin = item.UserRole.IsAdmin,
                    IsActive = item.IsActive,
                    ActiveLabel = item.IsActive ? "Active" : "Inactive"




                }).OrderByDescending(m=>m.Id).ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
        public UserViewModel GetById(string userId)
        {
            var entity = _dBContext.AspNetUsers.Find(userId);
            if (entity != null)
            {
                var returnData = new UserViewModel
                {
                    Id = entity.Id,
                    FirstName = entity.FirstName,
                    LastName = entity.LastName,
                    UserRoleId = entity.UserRoleId,
                    ApprovalWorkflowLevelId = entity.UserRole.WorkflowLevelId,
                    CompanyId = entity.CompanyDepartment.CompanyId,
                    DepartmentId = entity.CompanyDepartment.DepartmentId,
                    UserRoleName = entity.UserRole?.Name,
                    PhoneNumber = entity.PhoneNumber,
                    CompanyName = entity.CompanyDepartment.Company.Name,
                    HasChangePaqssword = entity.HasChangePaqssword,
                    CanMakePayment = entity.CanMakePayment,
                    DepartmentName = entity.CompanyDepartment.Department.Name,
                    CompanyDepartmentId = entity.CompanyDepartmentId,
                    IsAdmin = entity.UserRole.IsAdmin,
                    IsHod = entity.UserRole.IsHOD,
                    IsOtherUser = entity.UserRole.IsOtherUser,
                    IsGeneralManager = entity.UserRole.IsGM,
                    IsHeadOfAccount = entity.UserRole.IsAccountHead,
                    IsExecutive = entity.UserRole.IsEzecutive,
                    IsActive = entity.IsActive,
                    Email = entity.Email,
                    ActiveLabel = entity.IsActive ? "Active" : "Inactive",
                    CanCreateRequestForOtherDept = entity.CompanyDepartment.CanCreateRequestForOtherDept


                };

                if (returnData.UserRoleTypeId == (int) UserRoleType.OtherUser)
                {
                    returnData.IsOtherUser = true;
                }
                if (returnData.UserRoleTypeId == (int)UserRoleType.Admin)
                {
                    returnData.IsAdmin = true;
                }
                if (returnData.UserRoleTypeId == (int)UserRoleType.GeneralManager)
                {
                    returnData.IsGeneralManager = true;
                }
                if (returnData.UserRoleTypeId == (int)UserRoleType.HeadOfAccount)
                {
                    returnData.IsHeadOfAccount = true;
                }
                if (returnData.UserRoleTypeId == (int)UserRoleType.Executive)
                {
                    returnData.IsExecutive = true;
                }

                return returnData;
            }
            throw new Exception("Item NOT found!");
        }
        public UserViewModel GetByEmail(string email)
        {
            var entity = _dBContext.AspNetUsers.SingleOrDefault(x => x.Email == email);
            if (entity != null)
            {
                var returnData = new UserViewModel
                {
                    Id = entity.Id,
                    FirstName = entity.FirstName,
                    LastName = entity.LastName,
                    UserRoleId = entity.UserRoleId,
                    CompanyDepartmentId = entity.CompanyDepartmentId,
                    UserRoleName = entity.UserRole?.Name,
                    PhoneNumber = entity.PhoneNumber,
                    CompanyName = entity.CompanyDepartment?.Company?.Name,
                    HasChangePaqssword = entity.HasChangePaqssword

                };

                return returnData;
            }
            throw new Exception("Item NOT found!");
        }
        public List<LookupModel> GetLookup(int compDepartmentId)
        {
            try
            {
                var userLists = _dBContext.AspNetUsers.Where(c => c.CompanyDepartmentId == compDepartmentId).ToList();

                return userLists.Select(item => new LookupModel
                {

                    Value = item.Id,
                    Name = item.LastName + " " + item.FirstName

                }).ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }

        //public void CreateUserCompany(Entities.UserCompany model)
        // {
        //     try
        //     {
        //         _dBContext.UserCompanies.Add(model);
        //         _dBContext.SaveChanges();
        //     }
        //     catch (Exception e)
        //     {
        //         throw;
        //     }
        // }
        public List<UserViewModel> GetByCompany(int companyId)
        {
            var staffList = _dBContext.AspNetUsers.Where(c => c.CompanyDepartment.Company.Id == companyId).ToList();
            if (staffList.Any())
            {
                return staffList.Select(item => new UserViewModel
                {
                    Id = item.Id,
                    Email = item.Email,
                    FirstName = item.FirstName,
                    LastName = item.LastName,
                    PhoneNumber = item.PhoneNumber,
                    CompanyName = item.CompanyDepartment.Company.Name,
                    CompanyId = item.CompanyDepartment.CompanyId,
                    CompanyDepartmentId = item.CompanyDepartmentId,
                    UserRoleId = item.UserRoleId,
                    UserRoleName = item.UserRole?.Name,
                    CanMakePayment = item.CanMakePayment,
                    DepartmentName = item.CompanyDepartment.Department.Name,
                    IsAdmin = item.UserRole.IsAdmin,
                    IsActive = item.IsActive,
                    ActiveLabel = item.IsActive ? "Active" : "Inactive"

                }).OrderByDescending(m => m.UserId).ToList();

            }
            else
            {
                throw new Exception("No Record Found !");
            }

        }
        public List<LookupModel> GetLookupForStaffCreation(int compDepartmentId)
        {
            try
            {
                var userLists = _dBContext.AspNetUsers.Where(c => c.CompanyDepartmentId == compDepartmentId).ToList();

                foreach (var item in userLists.ToList())
                {
                    var userInStaff = _dBContext.Staffs.Any(c => c.AspNetUserId == item.Id);
                    if (userInStaff)
                    {
                        userLists.Remove(item);
                    }
                }

                return userLists.Select(item => new LookupModel
                {

                    Value = item.Id,
                    Name = item.LastName + " " + item.FirstName

                }).ToList();

               

            }
            catch (Exception)
            {
                throw;
            }
        }
        public bool IsEmailExist(string email)
        {
            return _dBContext.AspNetUsers.Any(c => c.Email == email);
        }
        public void UpdateUser(string userId, UserViewModel model)
        {
            var userRecToUpdate = _dBContext.AspNetUsers.Find(userId);

            if (userRecToUpdate != null)
            {
                if (userRecToUpdate.CompanyDepartment.Department.Name == "Account")
                {
                    userRecToUpdate.FirstName = model.FirstName;
                    userRecToUpdate.LastName = model.LastName;
                    userRecToUpdate.CompanyDepartmentId = model.CompanyDepartmentId;
                    userRecToUpdate.UserRoleId = model.UserRoleId;
                    userRecToUpdate.CanMakePayment = model.CanMakePayment;
                    userRecToUpdate.IsActive = model.IsActive;
                }
                else
                {
                    userRecToUpdate.FirstName = model.FirstName;
                    userRecToUpdate.LastName = model.LastName;
                    userRecToUpdate.CompanyDepartmentId = model.CompanyDepartmentId;
                    userRecToUpdate.UserRoleId = model.UserRoleId;
                    userRecToUpdate.CanMakePayment =false;
                    userRecToUpdate.IsActive = model.IsActive;
                }
               
            }
            _dBContext.SaveChanges();
        }
        public void DeleteUser(string userId)
        {
            var userRecToDelete = _dBContext.AspNetUsers.Find(userId);
            if (userRecToDelete != null)
            {
                _dBContext.AspNetUsers.Remove(userRecToDelete);
                _dBContext.SaveChanges();
            }
        }
        public void UpdateHasChangePassword(string userId)
        {
            var userRecToUpdate = _dBContext.AspNetUsers.Find(userId);
            if (userRecToUpdate != null)
            {
                userRecToUpdate.HasChangePaqssword = true;
                _dBContext.SaveChanges();
            }
           
        }
    }
}

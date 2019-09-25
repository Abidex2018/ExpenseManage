using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ExpenseManager.Helper.Entities;
using ExpenseManager.Helper.ViewModels;

namespace ExpenseManager.Helper.Repositories
{
    public class UserRoleRepository
    {
        private readonly ExpenseManagerEntities _dBContext;
        public UserRoleRepository()
        {
            this._dBContext = new ExpenseManagerEntities();
        }
        public List<UserRoleModel> GetAll()
        {
            try
            {
                var expenseLists = _dBContext.UserRoles.ToList();

                return expenseLists.Select(item => new UserRoleModel
                {

                    Id = item.Id,
                    Name = item.Name,
                    IsAdmin = item.IsAdmin,
                    WorkflowLevelId = item.WorkflowLevelId,
                    ApprovalLevel = GetApprovalLevel(item),
                    RoleType = GetRoleType(item)

                }).ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
        public string GetApprovalLevel(UserRole userRole)
        {

            if (userRole.WorkflowLevelId.HasValue)
            {
                return "Level " + userRole.WorkflowLevel?.LevelNo;
            }
          

            return "";
        }
        public string GetRoleType(UserRole userRole)
        {

            if (userRole.IsAdmin)
            {
                return "Admin";
            }
            if (userRole.IsHOD)
            {
                return "HOD";
            }
           
            return "";
        }
        public List<LookupModel> GetLookup()
        {
            try
            {
                var expenseLists = _dBContext.UserRoles.ToList();

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
        public UserRoleModel GetById(int userRoleId)
        {
            var entity = _dBContext.UserRoles.Find(userRoleId);
            if (entity != null)
            {
                var returnData = new UserRoleModel
                {

                    Id = entity.Id,
                    Name = entity.Name,
                    IsAdmin = entity.IsAdmin,
                    WorkflowLevelId = entity.WorkflowLevelId,
                    ApprovalLevel = "Level " + entity.WorkflowLevel?.LevelNo

                };

                return returnData;
            }
            throw new Exception("Item NOT found!");
        }
        public void Update(UserRoleModel model)
        {
            try
            {
                var item = _dBContext.UserRoles.Find(model.Id);
                if (item == null)
                {
                    throw new Exception("Item NOT found!");
                }

                item.WorkflowLevelId = model.WorkflowLevelId;
                
                _dBContext.SaveChanges();
            }
            catch (Exception e)
            {
                throw;
            }
        }
    }
}

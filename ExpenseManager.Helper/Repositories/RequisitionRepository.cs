using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ExpenseManager.Helper.Entities;
using ExpenseManager.Helper.Utilities;
using ExpenseManager.Helper.ViewModels;

namespace ExpenseManager.Helper.Repositories
{
    public class RequisitionRepository
    {
        private readonly ExpenseManagerEntities _dBContext;
        private readonly ApprovalWorkflowLevelRepository _workflowLevelRepo;
        private readonly UserRepository _user;
        private readonly StaffRepository _staff;
        public RequisitionRepository()
        {
            this._dBContext = new ExpenseManagerEntities();
            _workflowLevelRepo = new ApprovalWorkflowLevelRepository();
            _user = new UserRepository();
            _staff = new StaffRepository();
        }
        public List<RequisitionViewModel> GetPendingDisbursement(string userId)
        {
            try
            {
                var expenseLists = _dBContext.ExpenseRequisitions.Where(c => c.IsPaymentCompleted ==  false).OrderByDescending(c => c.Id).ToList();
                var user = _user.GetById(userId);
                return expenseLists.Select(item => new RequisitionViewModel
                {
                      
                    BeneficiaryId = item.BeneficiaryId,
                    CreatedBy = item.CreatedBy,
                    DateCreated = item.DateCreated,
                    CompanyDepartmentId = item.CompanyDepartmentId,
                    DepartmentName = item.CompanyDepartment.Department.Name,
                    ExpenseDescription = item.ExpenseDescription,
                    ExpenseItemId = item.ExpenseItemId,
                    ExpenseItemName = item.ExpenseItem.Name,
                    Id = item.Id,
                    Quantity = item.Quantity,
                    RequestTitle = item.RequestTitle,
                    TotalAmount = item.TotalAmount,
                    UnitPrice = item.UnitPrice,
                    IsApproved = item.IsApproved,
                    Status = item.Status,
                    StatusLabel = GetStatusLabel(item.Status),
                    ApprovalWorkflowNameWithLevel = GetWorkflowNameWithLevel(item.WorkflowLevelId),
                    WorkflowLevel = GetWorkflowLevel(item.WorkflowLevelId),
                    WorkflowLevelId = item.WorkflowLevelId,
                    WorkflowEnumType = item.WorkflowLevel.EnumType,     
                    CanPayOut = user.CanMakePayment
                    

                }).ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
        public List<RequisitionViewModel> GetTodayRequisitions()
        {
            var startDate = DateTime.UtcNow;
            var endDate = DateTime.UtcNow;

            var expenseLists = _dBContext.ExpenseRequisitions.Where(c => DbFunctions.TruncateTime(c.DateCreated) >= DbFunctions.TruncateTime(startDate) && DbFunctions.TruncateTime(c.DateCreated) <= DbFunctions.TruncateTime(endDate) && c.IsApproved == false).OrderByDescending(a => a.Id).ToList();
            return expenseLists.Select(item => new RequisitionViewModel
            {

                BeneficiaryId = item.BeneficiaryId,
                BeneficiaryName = _staff.GetById(item.BeneficiaryId).FullName,
                CreatedBy = item.CreatedBy,
                DateCreated = item.DateCreated,
                CompanyDepartmentId = item.CompanyDepartmentId,
                DepartmentName = item.CompanyDepartment.Department.Name,
                ExpenseDescription = item.ExpenseDescription,
                ExpenseItemId = item.ExpenseItemId,
                ExpenseItemName = item.ExpenseItem.Name,
                CompanyId = GetById(item.Id).CompanyId,
                DepartmentId = GetById(item.Id).DepartmentId,
                Id = item.Id,
                Quantity = item.Quantity,
                RequestTitle = item.RequestTitle,
                TotalAmount = item.TotalAmount,
                UnitPrice = item.UnitPrice,
                AmountSpent = item.AmountSpent,
                RetiredBalance = item.RetiredBalance,
                IsApproved = item.IsApproved,
                Status = item.Status,
                StatusLabel = GetStatusLabel(item.Status),
                ApprovalWorkflowNameWithLevel = GetWorkflowNameWithLevel(item.WorkflowLevelId),
                WorkflowLevel = GetWorkflowLevel(item.WorkflowLevelId),
                WorkflowLevelId = item.WorkflowLevelId,
                WorkflowEnumType = item.WorkflowLevel.EnumType
                
            }).ToList();
          
        }
        public List<RequisitionViewModel> GetTodayApprovedRequisitions()
        {
            var startDate = DateTime.UtcNow;
            var endDate = DateTime.UtcNow;

            var expenseLists = _dBContext.ExpenseRequisitions.Where(c => DbFunctions.TruncateTime(c.DateCreated) >= DbFunctions.TruncateTime(startDate) && DbFunctions.TruncateTime(c.DateCreated) <= DbFunctions.TruncateTime(endDate) && c.WorkflowLevelId == 9).OrderByDescending(a => a.Id).ToList();
            return expenseLists.Select(item => new RequisitionViewModel
            {

                BeneficiaryId = item.BeneficiaryId,
                BeneficiaryName = _staff.GetById(item.BeneficiaryId).FullName,
                CreatedBy = item.CreatedBy,
                DateCreated = item.DateCreated,
                CompanyDepartmentId = item.CompanyDepartmentId,
                DepartmentName = item.CompanyDepartment.Department.Name,
                ExpenseDescription = item.ExpenseDescription,
                ExpenseItemId = item.ExpenseItemId,
                ExpenseItemName = item.ExpenseItem.Name,
                CompanyId = GetById(item.Id).CompanyId,
                DepartmentId = GetById(item.Id).DepartmentId,
                Id = item.Id,
                Quantity = item.Quantity,
                RequestTitle = item.RequestTitle,
                TotalAmount = item.TotalAmount,
                UnitPrice = item.UnitPrice,
                AmountSpent = item.AmountSpent,
                RetiredBalance = item.RetiredBalance,
                IsApproved = item.IsApproved,
                Status = item.Status,
                StatusLabel = GetStatusLabel(item.Status),
                ApprovalWorkflowNameWithLevel = GetWorkflowNameWithLevel(item.WorkflowLevelId),
                WorkflowLevel = GetWorkflowLevel(item.WorkflowLevelId),
                WorkflowLevelId = item.WorkflowLevelId,
                WorkflowEnumType = item.WorkflowLevel.EnumType

            }).ToList();

        }
        public List<RequisitionViewModel> GetPendingRequisition(DateTime sDateTime, DateTime eDateTime, int? companyId, int? departmentId)
        {
            try
            {
                var expenseLists = _dBContext.ExpenseRequisitions.Where((c => DbFunctions.TruncateTime(c.DateCreated) >= sDateTime && DbFunctions.TruncateTime(c.DateCreated) <= eDateTime && (c.CompanyDepartment.CompanyId == companyId || c.CompanyDepartment.DepartmentId == departmentId))).ToList();
                return expenseLists.Select(item => new RequisitionViewModel
                {

                    BeneficiaryId = item.BeneficiaryId,
                    BeneficiaryName = _staff.GetById(item.BeneficiaryId).FullName,
                    CreatedBy = item.CreatedBy,
                    DateCreated = item.DateCreated,
                    CompanyDepartmentId = item.CompanyDepartmentId,
                    DepartmentName = item.CompanyDepartment.Department.Name,
                    ExpenseDescription = item.ExpenseDescription,
                    ExpenseItemId = item.ExpenseItemId,
                    ExpenseItemName = item.ExpenseItem.Name,
                    CompanyId = GetById(item.Id).CompanyId,
                    DepartmentId = GetById(item.Id).DepartmentId,
                    Id = item.Id,
                    Quantity = item.Quantity,
                    RequestTitle = item.RequestTitle,
                    TotalAmount = item.TotalAmount,
                    UnitPrice = item.UnitPrice,
                    AmountSpent = item.AmountSpent,
                    RetiredBalance = item.RetiredBalance,
                    IsApproved = item.IsApproved,
                    Status = item.Status,
                    StatusLabel = GetStatusLabel(item.Status),
                    ApprovalWorkflowNameWithLevel = GetWorkflowNameWithLevel(item.WorkflowLevelId),
                    WorkflowLevel = GetWorkflowLevel(item.WorkflowLevelId),
                    WorkflowLevelId = item.WorkflowLevelId,
                    WorkflowEnumType = item.WorkflowLevel.EnumType



                }).OrderByDescending(c => c.Id).ToList();
               
            }
            catch (Exception)
            {
                throw;
            }
        }
        public List<RequisitionViewModel> GetApprovedRequisition(DateTime sDateTime, DateTime eDateTime, int? companyId, int? departmentId)
        {
            try
            {
                var expenseLists = _dBContext.ExpenseRequisitions.Where((c => DbFunctions.TruncateTime(c.DateCreated) >= sDateTime && DbFunctions.TruncateTime(c.DateCreated) <= eDateTime && (c.CompanyDepartment.CompanyId == companyId || c.CompanyDepartment.DepartmentId == departmentId))).ToList();
                return expenseLists.Select(item => new RequisitionViewModel
                {

                    BeneficiaryId = item.BeneficiaryId,
                    BeneficiaryName = _staff.GetById(item.BeneficiaryId).FullName,
                    CreatedBy = item.CreatedBy,
                    DateCreated = item.DateCreated,
                    CompanyDepartmentId = item.CompanyDepartmentId,
                    DepartmentName = item.CompanyDepartment.Department.Name,
                    ExpenseDescription = item.ExpenseDescription,
                    ExpenseItemId = item.ExpenseItemId,
                    ExpenseItemName = item.ExpenseItem.Name,
                    CompanyId = GetById(item.Id).CompanyId,
                    DepartmentId = GetById(item.Id).DepartmentId,
                    Id = item.Id,
                    Quantity = item.Quantity,
                    RequestTitle = item.RequestTitle,
                    TotalAmount = item.TotalAmount,
                    UnitPrice = item.UnitPrice,
                    IsApproved = item.IsApproved,
                    Status = item.Status,
                    StatusLabel = GetStatusLabel(item.Status),
                    ApprovalWorkflowNameWithLevel = GetWorkflowNameWithLevel(item.WorkflowLevelId),
                    WorkflowLevel = GetWorkflowLevel(item.WorkflowLevelId),
                    WorkflowLevelId = item.WorkflowLevelId,
                    WorkflowEnumType = item.WorkflowLevel.EnumType



                }).OrderByDescending(c => c.Id).ToList();

            }
            catch (Exception)
            {
                throw;
            }
        }

        public List<RequisitionViewModel> GetAll()
        {
            try
            {
                var expenseLists = _dBContext.ExpenseRequisitions.OrderBy(c => c.Id).ToList();

                return expenseLists.Select(item => new RequisitionViewModel
                {

                    BeneficiaryId = item.BeneficiaryId,
                    CreatedBy = item.CreatedBy,
                    DateCreated = item.DateCreated,
                    CompanyDepartmentId = item.CompanyDepartmentId,
                    DepartmentId = item.CompanyDepartment.DepartmentId,
                    DepartmentName = item.CompanyDepartment.Department.Name,
                    ExpenseDescription = item.ExpenseDescription,
                    ExpenseItemId = item.ExpenseItemId,
                    ExpenseItemName = item.ExpenseItem.Name,
                    CompanyId = GetById(item.Id).CompanyId,
                    //DepartmentId = GetById(item.Id).DepartmentId,
                    Id = item.Id,
                    Quantity = item.Quantity,
                    RequestTitle = item.RequestTitle,
                    TotalAmount = item.TotalAmount,
                    UnitPrice = item.UnitPrice,
                    AmountSpent = item.AmountSpent,
                    RetiredBalance = item.RetiredBalance,
                    IsApproved = item.IsApproved,
                    Status = item.Status,
                    StatusLabel = GetStatusLabel(item.Status),
                    ApprovalWorkflowNameWithLevel = GetWorkflowNameWithLevel(item.WorkflowLevelId),
                    WorkflowLevel = GetWorkflowLevel(item.WorkflowLevelId),
                    WorkflowLevelId = item.WorkflowLevelId,
                    WorkflowEnumType = item.WorkflowLevel.EnumType

                   

                }).ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
        public List<RequisitionViewModel> GetAllBySearch(int? companyId,int? status)
        {
            try
            {
                var expenseLists = _dBContext.ExpenseRequisitions.Where(r=>r.CompanyDepartment.CompanyId == companyId && r.Status == status).OrderBy(c => c.Id).ToList();

                return expenseLists.Select(item => new RequisitionViewModel
                {

                    BeneficiaryId = item.BeneficiaryId,
                    CreatedBy = item.CreatedBy,
                    DateCreated = item.DateCreated,
                    CompanyDepartmentId = item.CompanyDepartmentId,
                    DepartmentName = item.CompanyDepartment.Department.Name,
                    ExpenseDescription = item.ExpenseDescription,
                    ExpenseItemId = item.ExpenseItemId,
                    ExpenseItemName = item.ExpenseItem.Name,
                    CompanyId = GetById(item.Id).CompanyId,
                    DepartmentId = GetById(item.Id).DepartmentId,
                    Id = item.Id,
                    Quantity = item.Quantity,
                    RequestTitle = item.RequestTitle,
                    TotalAmount = item.TotalAmount,
                    UnitPrice = item.UnitPrice,
                    AmountSpent = item.AmountSpent,
                    RetiredBalance = item.RetiredBalance,
                    IsApproved = item.IsApproved,
                    Status = item.Status,
                    StatusLabel = GetStatusLabel(item.Status),
                    ApprovalWorkflowNameWithLevel = GetWorkflowNameWithLevel(item.WorkflowLevelId),
                    WorkflowLevel = GetWorkflowLevel(item.WorkflowLevelId),
                    WorkflowLevelId = item.WorkflowLevelId,
                    WorkflowEnumType = item.WorkflowLevel.EnumType



                }).OrderByDescending(m => m.DateCreated).ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
        public List<RequisitionViewModel> GetAllByDate(DateTime sDateTime, DateTime eDateTime)
        {
            try
            {
                var expenseLists = _dBContext.ExpenseRequisitions.Where((m=>m.DateCreated >= sDateTime && m.DateCreated <= eDateTime)).OrderBy(c => c.Id).ToList();

                return expenseLists.Select(item => new RequisitionViewModel
                {

                    BeneficiaryId = item.BeneficiaryId,
                    CreatedBy = item.CreatedBy,
                    DateCreated = item.DateCreated,
                    CompanyDepartmentId = item.CompanyDepartmentId,
                    DepartmentName = item.CompanyDepartment.Department.Name,
                    ExpenseDescription = item.ExpenseDescription,
                    ExpenseItemId = item.ExpenseItemId,
                    ExpenseItemName = item.ExpenseItem.Name,
                    CompanyId = GetById(item.Id).CompanyId,
                    DepartmentId = GetById(item.Id).DepartmentId,
                    Id = item.Id,
                    Quantity = item.Quantity,
                    RequestTitle = item.RequestTitle,
                    TotalAmount = item.TotalAmount,
                    AmountSpent = item.AmountSpent,
                    RetiredBalance = item.RetiredBalance,
                    UnitPrice = item.UnitPrice,
                    IsApproved = item.IsApproved,
                    Status = item.Status,
                    StatusLabel = GetStatusLabel(item.Status),
                    ApprovalWorkflowNameWithLevel = GetWorkflowNameWithLevel(item.WorkflowLevelId),
                    WorkflowLevel = GetWorkflowLevel(item.WorkflowLevelId),
                    WorkflowLevelId = item.WorkflowLevelId,
                    WorkflowEnumType = item.WorkflowLevel.EnumType



                }).ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public string GetStatusLabel(int status)
        {
          
            if (status == (int)RequisitionStatus.Pending)
            {
                return "Pending";
            }
            if (status == (int)RequisitionStatus.Rejected)
            {
                return "Rejected";
            }
            if (status == (int)RequisitionStatus.AwaitingApproval)
            {
                return "Awaiting Approval";
            }
            if (status == (int)RequisitionStatus.PartialApproval)
            {
                return "Partial Approval";
            }
            if (status == (int)RequisitionStatus.Retired)
            {
                return "Retired";
            }
            if (status == (int)RequisitionStatus.Approved)
            {
                return "Approved";
            }

            if (status == (int)RequisitionStatus.Closed)
            {
                return "Closed";
            }
            return "Unknown";
        }
        public string GetWorkflowNameWithLevel(int workflowLevelId)
        {
            var entity = _dBContext.WorkflowLevels.Find(workflowLevelId);

            if (entity?.LevelNo > 0)
            {
                return $"{entity.Name} (Level {entity.LevelNo})";
            }
            return entity?.Name;

        }
        public string GetWorkflowLevel(int workflowLevelId)
        {
            var entity = _dBContext.WorkflowLevels.Find(workflowLevelId);
           
            if (entity?.LevelNo > 0)
            {
                return $"Level {entity.LevelNo})";
            }
           
            return entity?.Name;

        }
        public RequisitionViewModel GetById(int requisitionId)
        {
            var entity = _dBContext.ExpenseRequisitions.Find(requisitionId);
            if (entity != null)
            {
                var returnData = new RequisitionViewModel
                {
                    Id = entity.Id,
                    BeneficiaryId = entity.BeneficiaryId,
                    CreatedBy = entity.CreatedBy,
                    DateCreated = entity.DateCreated,
                    CompanyDepartmentId = entity.CompanyDepartmentId,
                    DepartmentName = entity.CompanyDepartment.Department.Name,
                    ExpenseDescription = entity.ExpenseDescription,
                    ExpenseItemId = entity.ExpenseItemId,
                    ExpenseItemName = entity.ExpenseItem.Name,
                    CompanyId = entity.CompanyDepartment.CompanyId,
                    DepartmentId = entity.CompanyDepartment.DepartmentId,
                    ExpenseCategoryId = entity.ExpenseItem.ExpenseType.ExpenseCategoryId,
                    ExpenseTypeId = entity.ExpenseItem.ExpenseTypeId,
                    Quantity = entity.Quantity,
                    RequestTitle = entity.RequestTitle,
                    TotalAmount = entity.TotalAmount,                             
                    UnitPrice = entity.UnitPrice,
                    IsApproved = entity.IsApproved,
                    RequiresExecutiveApproval = entity.RequiresExecutiveApproval,
                    Status = entity.Status,
                    WorkflowLevelId = entity.WorkflowLevelId,
                    WorkflowEnumType = entity.WorkflowLevel.EnumType,
                    StatusLabel = GetStatusLabel(entity.Status),
                    ApprovalWorkflowNameWithLevel = GetWorkflowNameWithLevel(entity.WorkflowLevelId),
                    WorkflowLevel = GetWorkflowLevel(entity.WorkflowLevelId),
                    CompanyName = entity.CompanyDepartment.Company.Name,
                    CreatedName = entity.AspNetUser.FirstName,
                    BeneficiaryName = entity.Staff.AspNetUser.LastName + " " + entity.Staff.AspNetUser.FirstName

                };

                returnData.ApprovalWorkflow = new List<ApprovalWorkflowModel>();
                if (entity.RequisitionApprovalWorkflows.Any())
                {
                    returnData.ApprovalWorkflow = entity.RequisitionApprovalWorkflows.Select(item => new ApprovalWorkflowModel
                    {
                       
                       Comment = item.Comment,
                       ExpenseRequisitionId = item.ExpenseRequisitionId,
                       Status = item.Status,
                       DateCreated = item.DateCreated,
                       StatusLabel = GetStatusLabel(item.Status),
                       UserName = item.AspNetUser.LastName + " " + item.AspNetUser.FirstName


                    }).ToList();
                }
                return returnData;
            }
            throw new Exception("Item NOT found!");
        }

        public void Create(RequisitionViewModel model)
        {
            try
            {
                
                //var staffprofile = _staff.GetById(userId);

               var userprofile = _user.GetById(model.CreatedBy);

               var workflowLevel = 0;


               if (userprofile.IsAdmin || userprofile.IsHod)
               {
                   workflowLevel = _workflowLevelRepo.GetByEnumType((int) RequisitionWorkflow.AwaitingApprovalLevelTwo)
                       .Id;

               }

               if (userprofile.IsHeadOfAccount)
               {
                   workflowLevel = _workflowLevelRepo.GetByEnumType((int) RequisitionWorkflow.AwaitingApprovalLevelFour)
                       .Id;

               }

               if (userprofile.IsGeneralManager)
               {
                   workflowLevel = _workflowLevelRepo
                       .GetByEnumType((int) RequisitionWorkflow.AwaitingApprovalLevelThree).Id;

               }

               if (userprofile.IsOtherUser)
               {
                   workflowLevel = _workflowLevelRepo.GetByEnumType((int) RequisitionWorkflow.AwaitingApprovalLevelOne)
                       .Id;

               }

               if (userprofile.IsExecutive)
               {
                   workflowLevel = _workflowLevelRepo.GetByEnumType((int) RequisitionWorkflow.Completed).Id;

               }

               var requisition = new ExpenseRequisition
               {
                   CreatedBy = userprofile.Id,
                   DateCreated = DateTime.Now,
                   CompanyDepartmentId = model.CompanyDepartmentId,
                   ExpenseDescription = model.ExpenseDescription,
                   ExpenseItemId = model.ExpenseItemId,
                   BeneficiaryId = model.BeneficiaryId,
                   Quantity = model.Quantity,
                   RequestTitle = model.RequestTitle,
                   TotalAmount = model.TotalAmount,
                   UnitPrice = model.UnitPrice,
                   Status = (int)RequisitionStatus.AwaitingApproval,
                   IsPaymentCompleted = false,
                   WorkflowLevelId = workflowLevel
               };

               _dBContext.ExpenseRequisitions.Add(requisition);
               _dBContext.SaveChanges();
               
               


              
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public void Update(RequisitionViewModel model, string userId)
        {
            try
            {
                var userprofile = _user.GetById(userId);
                var requisition = _dBContext.ExpenseRequisitions.Find(model.Id);
                if (requisition == null)
                {
                    throw new Exception("Item NOT found!");
                }
                if (userprofile.IsHod)
                {
                    var workflowLevel = _workflowLevelRepo.GetByEnumType((int)RequisitionWorkflow.AwaitingApprovalLevelTwo);
                    requisition.AmountSpent = model.AmountSpent;
                    requisition.RetiredBalance = model.RetiredBalance;
                    requisition.WorkflowLevelId = workflowLevel.Id;
                    requisition.Status = (int)RequisitionStatus.AwaitingApproval;
                    _dBContext.ExpenseRequisitions.AddOrUpdate(requisition);
                    _dBContext.SaveChanges();
                }
                if (userprofile.IsGeneralManager)
                {
                    var workflowLevel = _workflowLevelRepo.GetByEnumType((int)RequisitionWorkflow.AwaitingApprovalLevelThree);
                    requisition.AmountSpent = model.AmountSpent;
                    requisition.RetiredBalance = model.RetiredBalance;
                    requisition.WorkflowLevelId = workflowLevel.Id;
                    requisition.Status = (int)RequisitionStatus.AwaitingApproval;
                    _dBContext.ExpenseRequisitions.AddOrUpdate(requisition);
                    _dBContext.SaveChanges();
                }
                if (userprofile.IsHeadOfAccount)
                {
                    var workflowLevel = _workflowLevelRepo.GetByEnumType((int)RequisitionWorkflow.AwaitingApprovalLevelFour);
                    requisition.AmountSpent = model.AmountSpent;
                    requisition.RetiredBalance = model.RetiredBalance;
                    requisition.WorkflowLevelId = workflowLevel.Id;
                    requisition.Status = (int)RequisitionStatus.AwaitingApproval;
                    _dBContext.ExpenseRequisitions.AddOrUpdate(requisition);
                    _dBContext.SaveChanges();
                }
                if (userprofile.IsExecutive)
                {
                    var workflowLevel = _workflowLevelRepo.GetByEnumType((int)RequisitionWorkflow.Completed);
                    requisition.AmountSpent = model.AmountSpent;
                    requisition.RetiredBalance = model.RetiredBalance;
                    requisition.WorkflowLevelId = workflowLevel.Id;
                    requisition.Status = (int)RequisitionStatus.AwaitingApproval;
                    _dBContext.ExpenseRequisitions.AddOrUpdate(requisition);
                    _dBContext.SaveChanges();
                }
                else
                {
                    var workflowLevel = _workflowLevelRepo.GetByEnumType((int)RequisitionWorkflow.AwaitingApprovalLevelOne);
                    requisition.AmountSpent = model.AmountSpent;
                    requisition.RetiredBalance = model.RetiredBalance;
                    requisition.WorkflowLevelId = workflowLevel.Id;
                    requisition.Status = (int)RequisitionStatus.AwaitingApproval;
                    _dBContext.ExpenseRequisitions.AddOrUpdate(requisition);
                    _dBContext.SaveChanges();
                }
               

               
            }
            catch (Exception e)
            {
                throw;
            }
        }
        public void RetireReq(RequisitionViewModel model, string userId)
        {
            try
            {
                var userprofile = _user.GetById(userId);
                var requisition = _dBContext.ExpenseRequisitions.Find(model.Id);
                if (requisition == null)
                {
                    throw new Exception("Item NOT found!");
                }

                requisition.AmountSpent = model.AmountSpent;
                requisition.RetiredBalance = model.RetiredBalance;
                requisition.Status = (int)RequisitionStatus.Retired;
                _dBContext.ExpenseRequisitions.AddOrUpdate(requisition);
                _dBContext.SaveChanges();
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public void SendForApproval(int requisitionId, string userId)
        {
            try
            {
                var userProfile = _dBContext.AspNetUsers.Find(userId);
                var workflowLevel = _workflowLevelRepo.GetByEnumType((int)RequisitionWorkflow.AwaitingApprovalLevelOne);

                var requisition = _dBContext.ExpenseRequisitions.Find(requisitionId);
                if (requisition == null)
                {
                    throw new Exception("Item NOT found!");
                }

                requisition.WorkflowLevelId = workflowLevel.Id;
                requisition.Status = (int)RequisitionStatus.AwaitingApproval;

                if (userProfile.UserRole.IsAdmin || userProfile.UserRole.IsHOD)
                {
                    workflowLevel = _workflowLevelRepo.GetByEnumType((int)RequisitionWorkflow.AwaitingApprovalLevelTwo);
                    requisition.WorkflowLevelId = workflowLevel.Id;
                    requisition.Status = (int)RequisitionStatus.AwaitingApproval;
                }
                if (userProfile.UserRole.IsGM)
                {
                    workflowLevel = _workflowLevelRepo.GetByEnumType((int)RequisitionWorkflow.AwaitingApprovalLevelThree);
                    requisition.WorkflowLevelId = workflowLevel.Id;
                    requisition.Status = (int)RequisitionStatus.AwaitingApproval;
                }
                if (userProfile.UserRole.IsAccountHead)
                {
                    workflowLevel = _workflowLevelRepo.GetByEnumType((int)RequisitionWorkflow.AwaitingApprovalLevelFour);
                    requisition.WorkflowLevelId = workflowLevel.Id;
                    requisition.Status = (int)RequisitionStatus.AwaitingApproval;
                }
                if (userProfile.UserRole.IsEzecutive)
                {
                    workflowLevel = _workflowLevelRepo.GetByEnumType((int)RequisitionWorkflow.Completed);
                    requisition.WorkflowLevelId = workflowLevel.Id;
                    requisition.Status = (int)RequisitionStatus.Approved;
                }


                var workflow = new RequisitionApprovalWorkflow();
                workflow.Status = requisition.Status;
                workflow.AspNetUserId = userId;
                workflow.Comment = "Sent for approval";
                workflow.ExpenseRequisitionId = requisitionId;
                workflow.DateCreated = DateTime.Now;
                _dBContext.RequisitionApprovalWorkflows.Add(workflow);

                _dBContext.SaveChanges();
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public void SubmitApproval(ApprovalModel model, string userId)
        {
            try
            {

                var userProfile = _dBContext.AspNetUsers.Find(userId);
                var requisition = _dBContext.ExpenseRequisitions.Find(model.RequisitionId);
                if (requisition == null)
                {
                    throw new Exception("Item NOT found!");
                }

                if (userProfile.UserRole.IsHOD)
                {
                    if (model.IsApproved)
                    {
                        var workflowLevel = _workflowLevelRepo.GetByEnumType((int)RequisitionWorkflow.AwaitingApprovalLevelTwo);
                     
                        requisition.Status = (int)RequisitionStatus.PartialApproval;
                        requisition.WorkflowLevelId = workflowLevel.Id;
                    }
                    else
                    {
                        var workflowLevel = _workflowLevelRepo.GetByEnumType((int)RequisitionWorkflow.Returned);
                        requisition.Status = (int)RequisitionStatus.Rejected;
                        requisition.WorkflowLevelId = workflowLevel.Id;
                    }
                }
                if (userProfile.UserRole.IsGM)
                {
                    if (model.IsApproved)
                    {
                        var workflowLevel = _workflowLevelRepo.GetByEnumType((int)RequisitionWorkflow.AwaitingApprovalLevelThree);
                        requisition.RequiresExecutiveApproval = model.RequiresExecutiveApproval;
                        requisition.Status = (int)RequisitionStatus.PartialApproval;
                        requisition.WorkflowLevelId = workflowLevel.Id;
                    }
                    else
                    {
                        var workflowLevel = _workflowLevelRepo.GetByEnumType((int)RequisitionWorkflow.Returned);
                        requisition.Status = (int)RequisitionStatus.Rejected;
                        requisition.WorkflowLevelId = workflowLevel.Id;
                    }
                }
                if (userProfile.UserRole.IsAccountHead)
                {
                    if (model.IsApproved)
                    {
                        if (model.RequiresExecutiveApproval)
                        {
                            var workflowLevel = _workflowLevelRepo.GetByEnumType((int)RequisitionWorkflow.AwaitingApprovalLevelFour);
                            requisition.Status = (int)RequisitionStatus.PartialApproval;
                            requisition.WorkflowLevelId = workflowLevel.Id;
                            requisition.RequiresExecutiveApproval = model.RequiresExecutiveApproval;
                        }
                        else
                        {
                            var workflowLevel = _workflowLevelRepo.GetByEnumType((int)RequisitionWorkflow.Completed);
                            requisition.IsApproved = true;
                            requisition.Status = (int)RequisitionStatus.Approved;
                            requisition.WorkflowLevelId = workflowLevel.Id;
                            requisition.RequiresExecutiveApproval = false;
                        }
                    }
                    else
                    {
                        var workflowLevel = _workflowLevelRepo.GetByEnumType((int)RequisitionWorkflow.Returned);
                        requisition.Status = (int)RequisitionStatus.Rejected;
                        requisition.WorkflowLevelId = workflowLevel.Id;
                    }
                }
                if (userProfile.UserRole.IsEzecutive)
                {
                    if (model.IsApproved)
                    {
                        var workflowLevel = _workflowLevelRepo.GetByEnumType((int)RequisitionWorkflow.Completed);
                        requisition.IsApproved = true;
                        requisition.Status = (int)RequisitionStatus.Approved;
                        requisition.WorkflowLevelId = workflowLevel.Id;
                    }
                    else
                    {
                        var workflowLevel = _workflowLevelRepo.GetByEnumType((int)RequisitionWorkflow.Returned);
                        requisition.IsApproved = false;
                        requisition.Status = (int)RequisitionStatus.Rejected;
                        requisition.WorkflowLevelId = workflowLevel.Id;
                    }
                }
                var workflow = new RequisitionApprovalWorkflow
                {
                    Status = requisition.Status,
                    AspNetUserId = userId,
                    Comment = model.Comment,
                    ExpenseRequisitionId = model.RequisitionId,
                    DateCreated = DateTime.Now
                };
                _dBContext.RequisitionApprovalWorkflows.Add(workflow);
                _dBContext.SaveChanges();
            }
            catch (Exception e)
            {
                throw;
            }
        }
        public void SubmitRetirementApproval(ApprovalModel model, string userId)
        {
            try
            {

                var userProfile = _dBContext.AspNetUsers.Find(userId);
                var requisition = _dBContext.ExpenseRequisitions.Find(model.RequisitionId);
                if (requisition == null)
                {
                    throw new Exception("Item NOT found!");
                }


               
                requisition.IsApproved = true;
                requisition.Status = (int)RequisitionStatus.Closed;

                _dBContext.ExpenseRequisitions.AddOrUpdate(requisition);

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
                var itemToDelete = _dBContext.ExpenseRequisitions.Find(id);
                if (itemToDelete != null)
                {                  
                    _dBContext.ExpenseRequisitions.Remove(itemToDelete);
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












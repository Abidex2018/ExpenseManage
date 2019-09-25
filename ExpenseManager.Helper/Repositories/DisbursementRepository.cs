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
    public class DisbursementRepository
    {
        private readonly ExpenseManagerEntities _dBContext;
        private readonly ApprovalWorkflowLevelRepository _workflowLevelRepo;
        public DisbursementRepository()
        {
            this._dBContext = new ExpenseManagerEntities();
            _workflowLevelRepo = new ApprovalWorkflowLevelRepository();
        }
        public void Create(DisbursementViewModel model)
        {
            try
            {
                if (model.AmountToPay > model.OpeningBalance)
                {
                    throw new Exception("Amount to pay cannot be greater than the opening balance");
                }
                var disburse = new ExpenseDisbursement();
                disburse.AmountPaid = model.AmountToPay;             
                disburse.OpeningBalance = model.OpeningBalance;
                disburse.ExpenseRequisitionId = model.RequisitionId;
                disburse.ReceiverId = model.BeneficiaryId;
                disburse.Description = model.Description;
                disburse.DateCreated = DateTime.Now;
                _dBContext.ExpenseDisbursements.Add(disburse);

                if (model.OpeningBalance == model.AmountToPay)
                {
                    var workflowLevel = _workflowLevelRepo.GetByEnumType((int)RequisitionWorkflow.Closed);
                    var expenseReq = _dBContext.ExpenseRequisitions.Find(model.RequisitionId);
                    expenseReq.IsPaymentCompleted = true;
                    expenseReq.WorkflowLevelId = workflowLevel.Id;
                }

                _dBContext.SaveChanges();
            }
            catch (Exception e)
            {
                throw;
            }
        }
        public DisbursementViewModel GetRequisitionToPayout(int requisitionId)
        {
            try
            {
                var expenseReq = _dBContext.ExpenseRequisitions.Find(requisitionId);

                if (expenseReq != null)
                {
                    var returnData = new DisbursementViewModel
                    {
                        BeneficiaryId = expenseReq.BeneficiaryId,
                        CreatedBy = expenseReq.CreatedBy,
                        DateCreated = expenseReq.DateCreated,
                        CompanyDepartmentId = expenseReq.CompanyDepartmentId,
                        CompanyName = expenseReq.CompanyDepartment.Company.Name,
                        DepartmentName = expenseReq.CompanyDepartment.Department.Name,                                        
                        ExpenseItemName = expenseReq.ExpenseItem.Name,
                        CompanyId = expenseReq.CompanyDepartment.CompanyId,                      
                        RequestTitle = expenseReq.RequestTitle,
                        TotalAmount = expenseReq.TotalAmount,
                        RequisitionId = expenseReq.Id,
                       
                    };

                    if (!expenseReq.ExpenseDisbursements.Any())
                    {
                        returnData.OpeningBalance = returnData.TotalAmount;
                    }
                    else
                    {
                        returnData.TotalPaidout = expenseReq.ExpenseDisbursements.Sum(c => c.AmountPaid);
                        returnData.OpeningBalance = returnData.TotalAmount - returnData.TotalPaidout;
                    }
                   
                    return returnData;
                }
                throw new Exception("Item NOT found!");
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
                var expenseLists = _dBContext.ExpenseDisbursements.Where(c => c.ExpenseRequisition.CompanyDepartment.CompanyId == companyId).ToList();

                return expenseLists.Select(item => new LookupModel
                {
                    
                    Id = item.Id,
                    Name = item.ExpenseRequisition.RequestTitle                 

                }).ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
        public List<DisbursementViewModel> GetDisbursementHistory(int requisitionId)
        {
            try
            {
                var expenseDisList = _dBContext.ExpenseDisbursements.Where(c => c.ExpenseRequisitionId == requisitionId).ToList();
                return expenseDisList.Select(item => new DisbursementViewModel
                {

                    Id = item.Id,
                    AmountPaid = item.AmountPaid,
                    OpeningBalance = item.OpeningBalance,
                    ClossingBalance = item.Balance,
                    ReceiverName = item.Staff.AspNetUser.LastName + " " + item.Staff.AspNetUser.FirstName,
                    DateCreated = item.DateCreated


                }).ToList();

                
            }
            catch (Exception)
            {
                throw;
            }
        }
        public List<DisbursementViewModel> GetDisbursementHistory(DateTime sDateTime,DateTime eDateTime)
        {
            try
            {
                var expenseDisList = _dBContext.ExpenseDisbursements
                    .Where(m => m.DateCreated >= sDateTime && m.DateCreated <= eDateTime).ToList();
                return expenseDisList.Select(item => new DisbursementViewModel
                {

                    Id = item.Id,
                    AmountPaid = item.AmountPaid,
                    OpeningBalance = item.OpeningBalance,
                    ClossingBalance = item.Balance,
                    ReceiverName = item.Staff.AspNetUser.LastName + " " + item.Staff.AspNetUser.FirstName,
                    DateCreated = item.DateCreated


                }).ToList();


            }
            catch (Exception)
            {
                throw;
            }
        }

        public List<DisbursementViewModel> GetDisbursementHistory()
        {
            try
            {
                var expenseDisList = _dBContext.ExpenseDisbursements.ToList();
                return expenseDisList.Select(item => new DisbursementViewModel
                {

                    Id = item.Id,
                    AmountPaid = item.AmountPaid,
                    OpeningBalance = item.OpeningBalance,
                    ClossingBalance = item.Balance,
                    ReceiverName = item.Staff.AspNetUser.LastName + " " + item.Staff.AspNetUser.FirstName,
                    DateCreated = item.DateCreated


                }).ToList();


            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}

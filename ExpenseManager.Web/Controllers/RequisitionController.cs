using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ExpenseManager.Helper.Entities;
using ExpenseManager.Helper.Repositories;
using ExpenseManager.Helper.Utilities;
using ExpenseManager.Helper.ViewModels;
using Microsoft.AspNet.Identity;

namespace ExpenseManager.Web.Controllers
{
    [Authorize]
    public class RequisitionController : Controller
    {
        private readonly RequisitionRepository _requisitionRepo;
        private readonly DepartmentRepository _departmentRepo;
        private readonly CompanyDepartmentRepository _comDepartmentRepo;
        private readonly ExpenseCategoryRepository _expCategoryRepo;
        private readonly CompanyRepository _companyRepo;
        private readonly ExpenseTypeRepository _expenseTypeRepo;
        private readonly ExpenseItemRepository _expenseItemRepo;
        private readonly StaffRepository _staffRepo;
        private readonly DisbursementRepository _disbursementRepo;
        private readonly UserRepository _userRepo;
        private readonly ApprovalWorkflowLevelRepository _workflow;
        public RequisitionController()
        {
            _requisitionRepo = new RequisitionRepository();
            _departmentRepo = new DepartmentRepository();
            _expCategoryRepo = new ExpenseCategoryRepository();
            _companyRepo = new CompanyRepository();
            _expenseTypeRepo = new ExpenseTypeRepository();
            _expenseItemRepo = new ExpenseItemRepository();
            _staffRepo = new StaffRepository();
            _disbursementRepo = new DisbursementRepository();
            _userRepo = new UserRepository();
            _comDepartmentRepo = new CompanyDepartmentRepository();
            _workflow = new ApprovalWorkflowLevelRepository();
        }
        public ActionResult Index()
        {
            ViewBag.sDate = DateTime.Now.ToString("dd/MM/yyyy");
            ViewBag.eDate = DateTime.Now.ToString("dd/MM/yyyy");
            int companyId = 0;
            ViewBag.CompaniesLookup = _companyRepo.GetLookup();
            ViewBag.CompaniesLookup = _companyRepo.GetLookup();
            ViewBag.companyId = companyId;
            return View();
        }
      
        public ActionResult Approval()
        {
            try
            {
                var userProfile = _userRepo.GetById(User.Identity.GetUserId());
             
                if ( (userProfile.IsGeneralManager && userProfile.CompanyId == 1))
                {
                    var requisitionList = _requisitionRepo.GetAll().Where(c => c.CompanyId == 1 && c.WorkflowEnumType == (int)RequisitionWorkflow.AwaitingApprovalLevelTwo).OrderByDescending(m=>m.Id).ToList();
                    return View(requisitionList);
                }
                else if ((userProfile.IsGeneralManager && userProfile.CompanyId == 2))
                {
                    var requisitionList = _requisitionRepo.GetAll().Where(c => c.CompanyId == 2 && c.WorkflowEnumType == (int)RequisitionWorkflow.AwaitingApprovalLevelTwo).OrderByDescending(m => m.Id).ToList();
                    return View(requisitionList);
                }
                else if ((userProfile.IsGeneralManager && userProfile.CompanyId == 3))
                {
                    var requisitionList = _requisitionRepo.GetAll().Where(c => c.CompanyId == 3 && c.WorkflowEnumType == (int)RequisitionWorkflow.AwaitingApprovalLevelTwo).OrderByDescending(m => m.Id).ToList();
                    return View(requisitionList);
                }
                else if ((userProfile.IsHod && userProfile.CompanyId == 1))
                {
                    var requisitionList = _requisitionRepo.GetAll().Where(c => c.CompanyId == 1 && c.CompanyDepartmentId == userProfile.CompanyDepartmentId && c.WorkflowEnumType == (int)RequisitionWorkflow.AwaitingApprovalLevelOne).OrderByDescending(m => m.Id).ToList();
                    return View(requisitionList);
                }
                else if ((userProfile.IsHod && userProfile.CompanyId == 2))
                {
                    var requisitionList = _requisitionRepo.GetAll().Where(c => c.CompanyId == 2 && c.CompanyDepartmentId == userProfile.CompanyDepartmentId && c.WorkflowEnumType == (int)RequisitionWorkflow.AwaitingApprovalLevelOne ).OrderByDescending(m => m.Id).ToList();
                    return View(requisitionList);
                }
                else if ((userProfile.IsHod && userProfile.CompanyId == 3))
                {
                    var requisitionList = _requisitionRepo.GetAll().Where(c => c.CompanyId == 3 && c.CompanyDepartmentId == userProfile.CompanyDepartmentId && c.WorkflowEnumType == (int)RequisitionWorkflow.AwaitingApprovalLevelOne ).OrderByDescending(m => m.Id).ToList();
                    return View(requisitionList);
                }
                else if (userProfile.IsHeadOfAccount)
                {
                    var requisitionList = _requisitionRepo.GetAll().Where(c => c.WorkflowEnumType == (int)RequisitionWorkflow.AwaitingApprovalLevelThree).OrderByDescending(c => c.Id).ToList();
                    return View(requisitionList);
                }
                else if (userProfile.IsExecutive)
                {
                    var requisitionList = _requisitionRepo.GetAll().Where(c => c.WorkflowEnumType == (int)RequisitionWorkflow.AwaitingApprovalLevelFour).OrderByDescending(m => m.Id).ToList();
                    return View(requisitionList);
                }

                //var requisitionList = _requisitionRepo.GetAll().Where(c => c.WorkflowLevelId == userProfile.ApprovalWorkflowLevelId).ToList();
                else
                {
                    return View(new List<RequisitionViewModel>());
                }
            }
            catch (Exception ex)
            {
                return View(new List<RequisitionViewModel>());
            }
        }
     
        public ActionResult CashDisbursement()
        {
            try
            {
                //var userProfile = _userRepo.GetById(User.Identity.GetUserId());
                var requisitionList = _requisitionRepo.GetPendingDisbursement(User.Identity.GetUserId()).Where(m=>m.IsApproved);

                return View(requisitionList);
            }
            catch (Exception ex)
            {
                return View(new List<RequisitionViewModel>());
            }
        }
        public ActionResult RequisitionList()
        {
            try
            {
                var userProfile = _userRepo.GetById(User.Identity.GetUserId());

                if ( (userProfile.IsGeneralManager && userProfile.CompanyId == 1))
                {
                    var requisitionList = _requisitionRepo.GetAll().Where(c => c.CompanyId == 1).OrderByDescending(m => m.Id).ToList();
                    return PartialView(requisitionList);
                }
                if (userProfile.IsAdmin)
                {
                    var requisitionList = _requisitionRepo.GetAll().Where(c => c.CreatedBy == userProfile.Id).OrderByDescending(m => m.Id).ToList();
                    return PartialView(requisitionList);
                }
               
                if ((userProfile.IsOtherUser && userProfile.CompanyId == 1))
                {
                    var requisitionList = _requisitionRepo.GetAll().Where(c => c.CompanyId == 1 && c.BeneficiaryId == userProfile.Id).OrderByDescending(m => m.Id).ToList();
                    return PartialView(requisitionList);
                }
                if ((userProfile.IsOtherUser && userProfile.CompanyId == 2))
                {
                    var requisitionList = _requisitionRepo.GetAll().Where(c => c.CompanyId == 2 && c.BeneficiaryId == userProfile.Id).OrderByDescending(m => m.Id).ToList();
                    return PartialView(requisitionList);
                }
                if ((userProfile.IsOtherUser && userProfile.CompanyId == 3))
                {
                    var requisitionList = _requisitionRepo.GetAll().Where(c => c.CompanyId == 3 && c.BeneficiaryId == userProfile.Id).OrderByDescending(m => m.Id).ToList();
                    return PartialView(requisitionList);
                }
                else if ((userProfile.IsGeneralManager && userProfile.CompanyId == 2))
                {
                    var requisitionList = _requisitionRepo.GetAll().Where(c => c.CompanyId == 2).OrderByDescending(m => m.Id).ToList();
                    return PartialView(requisitionList);
                }
                else if ((userProfile.IsGeneralManager && userProfile.CompanyId == 1))
                {
                    var requisitionList = _requisitionRepo.GetAll().Where(c => c.CompanyId == 1).OrderByDescending(m => m.Id).ToList();
                    return PartialView(requisitionList);
                }
                else if ((userProfile.IsHod && userProfile.CompanyId == 1))
                {
                    var requisitionList = _requisitionRepo.GetAll().Where(c => c.CompanyId == 1 && (c.BeneficiaryId == userProfile.Id || c.DepartmentId == userProfile.DepartmentId )).OrderByDescending(m => m.Id).ToList();
                    return PartialView(requisitionList);
                }
                else if ((userProfile.IsHod && userProfile.CompanyId == 2))
                {
                    var requisitionList = _requisitionRepo.GetAll().Where(c => c.CompanyId == 2 && (c.BeneficiaryId == userProfile.Id || c.DepartmentId == userProfile.DepartmentId)).OrderByDescending(m => m.Id).ToList();
                    return PartialView(requisitionList);
                }
                else if ((userProfile.IsHod && userProfile.CompanyId == 3))
                {
                    var requisitionList = _requisitionRepo.GetAll().Where(c => c.CompanyId == 3 && (c.BeneficiaryId == userProfile.Id || c.DepartmentId == userProfile.DepartmentId)).OrderByDescending(m => m.Id).ToList();
                    return PartialView(requisitionList);
                }
                else if ((userProfile.IsGeneralManager && userProfile.CompanyId == 3))
                {
                    var requisitionList = _requisitionRepo.GetAll().Where(c => c.CompanyId == 3).OrderByDescending(m => m.Id).ToList();
                    return PartialView(requisitionList);
                }
                else if (userProfile.IsHeadOfAccount)
                {
                    var requisitionList = _requisitionRepo.GetAll().OrderByDescending(m => m.Id).ToList();
                    return PartialView(requisitionList);
                }
                else if (userProfile.IsExecutive)
                {
                    var requisitionList = _requisitionRepo.GetAll().OrderByDescending(m => m.Id).ToList();
                    
                    return PartialView(requisitionList);
                }
                else
                {
                    return PartialView(new List<RequisitionViewModel>());
                }
               // var requisitionList = _requisitionRepo.GetAll().OrderByDescending(m=>m.DateCreated).ToList();
              
               // return PartialView(requisitionList);
            }
            catch (Exception ex)
            {
                return PartialView(new List<RequisitionViewModel>());
            }
        }
        public ActionResult RetirementList()
        {
            try
            {
                var userProfile = _userRepo.GetById(User.Identity.GetUserId());

                var retirementList = _requisitionRepo.GetAll().Where(c => c.BeneficiaryId == userProfile.Id && c.Status == (int)RequisitionStatus.Approved).OrderByDescending(m => m.Id).ToList();
                return View(retirementList);
               
            }
            catch (Exception ex)
            {
                return View(new List<RequisitionViewModel>());
            }
        }

        public decimal GetTotalAmountDisburshment()
        {
            decimal calculate = 0;
            try
            {
                var totalAmountDis = _disbursementRepo.GetDisbursementHistory().Sum(s => s.AmountPaid);
                decimal? reqBalance = _requisitionRepo.GetAll().Sum(s => s.RetiredBalance);
                if (reqBalance != null) calculate = (decimal) (totalAmountDis - reqBalance);
                return calculate;
            }
            catch (Exception e)
            {
                return calculate;
            }
        }
        public int GetRequisitionCountList()
        {
            int countReqList = 0;
            try
            {
                var userProfile = _userRepo.GetById(User.Identity.GetUserId());
               
                if (userProfile.IsHod && userProfile.CompanyId ==1)
                {
                     countReqList = countReqList = _requisitionRepo.GetAll().Count(c => c.CompanyId == 1 && c.CompanyDepartmentId == userProfile.CompanyDepartmentId && c.WorkflowLevelId == 3);

                    //return Json(new { IsAuthenticated = true, IsSuccessful = true, Items = countReqList }, JsonRequestBehavior.AllowGet );
                }
                if (userProfile.IsHod && userProfile.CompanyId == 2)
                {
                     countReqList = _requisitionRepo.GetAll().Count(c => c.CompanyId == 2 && c.CompanyDepartmentId == userProfile.CompanyDepartmentId && c.WorkflowLevelId == 3);

                   // return Json(new { IsAuthenticated = true, IsSuccessful = true, Items = countReqList }, JsonRequestBehavior.AllowGet);
                }
                if (userProfile.IsGeneralManager && userProfile.CompanyId == 1)
                {
                     countReqList = countReqList = _requisitionRepo.GetAll().Count(c => c.CompanyId == 1  && c.WorkflowLevelId == 4);

                    //return Json(new { IsAuthenticated = true, IsSuccessful = true, Items = countReqList }, JsonRequestBehavior.AllowGet);
                }
                if (userProfile.IsGeneralManager && userProfile.CompanyId == 2)
                {
                     countReqList = _requisitionRepo.GetAll().Count(c => c.CompanyId == 2 && c.DepartmentId == userProfile.DepartmentId && c.WorkflowLevelId == 4);

                    //return Json(new { IsAuthenticated = true, IsSuccessful = true, Items = countReqList }, JsonRequestBehavior.AllowGet);
                }
                if (userProfile.IsHeadOfAccount)
                {
                    countReqList = _requisitionRepo.GetAll().Count(c => c.WorkflowLevelId == 6);

                    //return Json(new { IsAuthenticated = true, IsSuccessful = true, Items = countReqList }, JsonRequestBehavior.AllowGet);
                }
                if (userProfile.IsExecutive)
                {
                    countReqList = _requisitionRepo.GetAll().Count(c => c.WorkflowLevelId == 7);

                    // return Json(new { IsAuthenticated = true, IsSuccessful = true, Items = countReqList }, JsonRequestBehavior.AllowGet);
                }

                return countReqList;

            }
            catch (Exception ex)
            {
                return countReqList ;
            }
        }
        public ActionResult ApproveRetirementList()
        {
            try
            {
               

                var retirementList = _requisitionRepo.GetAll().Where(c =>c.Status == (int)RequisitionStatus.Retired).OrderByDescending(m => m.Id).ToList();
                return View(retirementList);

            }
            catch (Exception ex)
            {
                return View(new List<RequisitionViewModel>());
            }
        }
        public ActionResult ApprovalRetirementDialog(int requisitionId)
        {
            try
            {
                var item = _requisitionRepo.GetById(requisitionId);
                var userProfile = _userRepo.GetById(User.Identity.GetUserId());
                if (userProfile.IsHeadOfAccount)
                {
                    var apprpvalModel = new ApprovalModel
                    {
                        RequisitionId = item.Id,
                        RequiresExecutiveApproval = item.RequiresExecutiveApproval,
                        IsGmOrAccountHead = item.IsApproved

                    };
                    return PartialView(apprpvalModel);
                }
                else
                {
                    return PartialView(new ApprovalModel());
                }
             
            }
            catch (Exception ex)
            {
                return PartialView(new ApprovalModel());
            }
        }
        public ActionResult RequisitionListBySearch(int companyId = 0,int status =0)
        {
            try
            {
                var userProfile = _userRepo.GetById(User.Identity.GetUserId());

                if (companyId == 0 || status == 0)
                {
                    
                    var requisitionList = _requisitionRepo.GetAllBySearch(companyId,status).ToList();
                    return PartialView(requisitionList);
                }
               
                else
                {
                    if (userProfile.IsAdmin)
                    {
                        var requisitionList = _requisitionRepo.GetAllBySearch(companyId, status).Where(r => r.CreatedBy == userProfile.Id).ToList();
                        return PartialView(requisitionList);
                    }
                    else
                    {
                        var requisitionList = _requisitionRepo.GetAllBySearch(companyId, status).ToList();
                        return PartialView(requisitionList);
                    }
                }

            }
            catch (Exception ex)
            {
                return PartialView(new List<RequisitionViewModel>());
            }


        }
        public ActionResult AddRequisition()
        {
            try
            {
              
                var userProfile = _userRepo.GetById(User.Identity.GetUserId());
              
                 if (userProfile.IsAdmin)
                {
                    int beneficiaryId = 0;
                    //var compList = _companyRepo.GetLookup();
                    //ViewBag.CompaniesLookup = compList;
                    ViewBag.CompaniesLookup = _companyRepo.GetLookup();
                    ViewBag.CompDepartmentsLookup = new List<LookupModel>();
                    ViewBag.ExpenseCategoriesLookup = _expCategoryRepo.GetLookup();
                    ViewBag.beneficiaryId = beneficiaryId;
                    ViewBag.BeneficiariesLookup = _staffRepo.GetLookup();
                    ViewBag.ExpenseTypesLookup = new List<LookupModel>();
                    ViewBag.ExpenseItemsLookup = new List<LookupModel>();

                    return PartialView(new RequisitionViewModel());
                }
                else
                {

                  
                    ViewBag.ExpenseCategoriesLookup = _expCategoryRepo.GetLookup();
                  
                    ViewBag.BeneficiariesLookup = new List<LookupModel>();
                    ViewBag.ExpenseTypesLookup = new List<LookupModel>();
                    ViewBag.ExpenseItemsLookup = new List<LookupModel>();

                    return PartialView(new RequisitionViewModel());
                }
              
            }
            catch (Exception ex)
            {
                return PartialView(new RequisitionViewModel());
            }
        }
        public JsonResult CreateRequisition(RequisitionViewModel model)
        {
            try
            {
                model.CreatedBy = User.Identity.GetUserId();
               
                _requisitionRepo.Create(model);
                return Json(new { IsAuthenticated = true, IsSuccessful = true });
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = "Sorry, You have not been Activated to make Requisition" });
            }
        }

        public ActionResult EditRequisition(int requisitionId)
        {
            try
            {
                var compList = _companyRepo.GetLookup();
                ViewBag.CompaniesLookup = compList;
                var item = _requisitionRepo.GetById(requisitionId);
                var expenseCategory = _expCategoryRepo.GetLookup();
                var userProfile = _userRepo.GetById(User.Identity.GetUserId());
                var deptList = _comDepartmentRepo.GetLookup(item.CompanyId);
                if (!userProfile.CanCreateRequestForOtherDept)
                {
                    compList = compList.Where(x => x.Id == userProfile.CompanyId).ToList();
                    deptList = deptList.Where(x => x.Id == userProfile.CompanyDepartmentId).ToList();

                    ViewBag.CompaniesLookup = compList;
                    ViewBag.CompDepartmentsLookup = deptList;
                    ViewBag.ExpenseCategoriesLookup = expenseCategory.Where(x=>x.Id == _requisitionRepo.GetById(requisitionId).ExpenseCategoryId);
                    ViewBag.BeneficiariesLookup = _staffRepo.GetLookup(item.CompanyDepartmentId);
                    ViewBag.ExpenseTypesLookup = _expenseTypeRepo.GetLookup(item.ExpenseCategoryId);
                    ViewBag.ExpenseItemsLookup = _expenseItemRepo.GetLookup(item.ExpenseTypeId);
                    return PartialView(item);
                }
                else
                {
                    compList = compList.Where(x => x.Id == item.CompanyId).ToList();
                    deptList = deptList.Where(x => x.Id == item.CompanyDepartmentId).ToList();
                    ViewBag.CompaniesLookup = compList;
                    ViewBag.CompDepartmentsLookup = deptList;
                    ViewBag.ExpenseCategoriesLookup = _expCategoryRepo.GetLookup();
                    ViewBag.ExpenseCategoriesLookup = expenseCategory.Where(x => x.Id == _requisitionRepo.GetById(requisitionId).ExpenseCategoryId);
                    ViewBag.BeneficiariesLookup = _staffRepo.GetLookup(item.CompanyDepartmentId);
                    ViewBag.ExpenseTypesLookup = _expenseTypeRepo.GetLookup(item.ExpenseCategoryId);
                    ViewBag.ExpenseItemsLookup = _expenseItemRepo.GetLookup(item.ExpenseTypeId);

                    return PartialView(item);
                }
           
             
            }
            catch (Exception ex)
            {
                return PartialView(new RequisitionViewModel());
            }
        }
        public ActionResult RetireRequisition(int requisitionId)
        {
            try
            {
               
                var userProfile = _userRepo.GetById(User.Identity.GetUserId());
                if (userProfile.Id != null)
                {
                    var item = _requisitionRepo.GetById(requisitionId);
                    return PartialView(item);
                }
                else
                {
                    return PartialView(new RequisitionViewModel());
                }
              
               
              
            }
            catch (Exception ex)
            {
                return PartialView(new RequisitionViewModel());
            }
        }
        public JsonResult RetireExpenseRequisition(RequisitionViewModel model)
        {
            try
            {

                _requisitionRepo.RetireReq(model, User.Identity.GetUserId());
                return Json(new { IsAuthenticated = true, IsSuccessful = true });
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = ex.Message });
            }
        }
        public JsonResult UpdateRequisition(RequisitionViewModel model)
        {
            try
            {
                
                _requisitionRepo.Update(model,User.Identity.GetUserId());
                return Json(new { IsAuthenticated = true, IsSuccessful = true });
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = ex.Message });
            }
        }
        
        public ActionResult DisbursementDialog(int requisitionId)
        {
            try
            {
                var item = _disbursementRepo.GetRequisitionToPayout(requisitionId);
                ViewBag.BeneficiariesLookup = _staffRepo.GetLookup();

                return PartialView(item);
            }
            catch (Exception ex)
            {
                return PartialView(new DisbursementViewModel());
            }
        }

        public JsonResult CreateDisbursement(DisbursementViewModel model)
        {
            try
            {
                _disbursementRepo.Create(model);
                return Json(new { IsAuthenticated = true, IsSuccessful = true });
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = ex.Message });
            }
        }
        public ActionResult ViewDetails(int requisitionId)
        {
            try
            {
                var item = _requisitionRepo.GetById(requisitionId);
                
                item.DisbursementHistory = _disbursementRepo.GetDisbursementHistory(requisitionId);


                return PartialView(item);
            }
            catch (Exception ex)
            {
                return PartialView(new RequisitionViewModel());
            }
        }
        
        public ActionResult SendForApproval(int requisitionId)
        {
            try
            {

                _requisitionRepo.SendForApproval(requisitionId, User.Identity.GetUserId());
                return Json(new { IsAuthenticated = true, IsSuccessful = true });
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = ex.Message });
            }
        }
        public ActionResult ApprovalDialog(int requisitionId)
        {
            try
            {
                var item = _requisitionRepo.GetById(requisitionId);
                var userProfile = _userRepo.GetById(User.Identity.GetUserId());

                var apprpvalModel = new ApprovalModel
                {
                    RequisitionId = item.Id,
                    RequiresExecutiveApproval = item.RequiresExecutiveApproval
                };
                if (userProfile.IsGeneralManager || userProfile.IsHeadOfAccount)
                {
                    apprpvalModel.IsGmOrAccountHead = true;
                }

                return PartialView(apprpvalModel);
            }
            catch (Exception ex)
            {
                return PartialView(new ApprovalModel());
            }
        }
        public ActionResult SubmitApproval(ApprovalModel model)
        {
            try
            {
               
                _requisitionRepo.SubmitApproval(model, User.Identity.GetUserId());
                return Json(new { IsAuthenticated = true, IsSuccessful = true });
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = ex.Message });
            }
        }
        public ActionResult SubmitRetirementApproval(ApprovalModel model)
        {
            try
            {

                _requisitionRepo.SubmitRetirementApproval(model, User.Identity.GetUserId());
                return Json(new { IsAuthenticated = true, IsSuccessful = true });
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = ex.Message });
            }
        }



    }
}
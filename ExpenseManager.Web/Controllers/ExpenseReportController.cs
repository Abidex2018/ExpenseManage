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
    public class ExpenseReportController : Controller
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
        public ExpenseReportController()
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
        }
        // GET: ExpenseReport
        public ActionResult Index()
        {

            ViewBag.sDate = DateTime.Now.ToString("dd/MM/yyyy");
            ViewBag.eDate = DateTime.Now.ToString("dd/MM/yyyy");
            ViewBag.CompaniesLookup = _companyRepo.GetLookup();
            ViewBag.DepartmentsLookup = _departmentRepo.GetLookup(); ;
            ViewBag.companyId = 0;
            ViewBag.departmentId = 0;
            //var requisitionList = _requisitionRepo.GetAll().Where(r=>r.IsApproved == false).ToList(); 
            return View();
        }

        public ActionResult PendingRequisition()
        {
            var userProfile = _userRepo.GetById(User.Identity.GetUserId());

            ViewBag.sDate = DateTime.Now.ToString("dd/MM/yyyy");
            ViewBag.eDate = DateTime.Now.ToString("dd/MM/yyyy");
            ViewBag.CompaniesLookup = _companyRepo.GetLookup();
            ViewBag.DepartmentsLookup = _departmentRepo.GetLookup();
            ViewBag.companyId = 0;
            ViewBag.departmentId = 0;
            var requisitionList = _requisitionRepo.GetTodayRequisitions().Where(r => r.IsApproved == false).ToList();
            return View(requisitionList);
        }

        [HttpPost]
        public ActionResult PendingRequisition(DateTime sDateTime,DateTime eDateTime, int companyId, int departmentId)
        {
            var userProfile = _userRepo.GetById(User.Identity.GetUserId());
            if (userProfile.Id != null)
            {
                ViewBag.sDate = sDateTime.ToString("dd/MM/yyyy");
                ViewBag.eDate = eDateTime.ToString("dd/MM/yyyy");
                ViewBag.CompaniesLookup = _companyRepo.GetLookup();
                ViewBag.DepartmentsLookup = _departmentRepo.GetLookup();
                ViewBag.companyId = companyId;
                ViewBag.departmentId = departmentId;
                var requisitionList = _requisitionRepo.GetPendingRequisition(sDateTime,eDateTime,companyId,departmentId).Where(r => r.IsApproved == false).ToList();
                return View(requisitionList);
            }
            return View(new List<RequisitionViewModel>());
        }

        public ActionResult ApprovedRequisition()
        {
            var userProfile = _userRepo.GetById(User.Identity.GetUserId());

            ViewBag.sDate = DateTime.Now.ToString("dd/MM/yyyy");
            ViewBag.eDate = DateTime.Now.ToString("dd/MM/yyyy");
            ViewBag.CompaniesLookup = _companyRepo.GetLookup();
            ViewBag.DepartmentsLookup = _departmentRepo.GetLookup();
            ViewBag.companyId = 0;
            ViewBag.departmentId = 0;
            var requisitionList = _requisitionRepo.GetTodayApprovedRequisitions().Where(r => r.WorkflowLevelId == 9).ToList(); 
            return View(requisitionList);
        }

        [HttpPost]
        public ActionResult ApprovedRequisition(DateTime sDateTime, DateTime eDateTime, int companyId, int departmentId)
        {
            var userProfile = _userRepo.GetById(User.Identity.GetUserId());

            if (userProfile.Id != null)
            {
                ViewBag.sDate = sDateTime.ToString("dd/MM/yyyy");
                ViewBag.eDate = eDateTime.ToString("dd/MM/yyyy");
                ViewBag.CompaniesLookup = _companyRepo.GetLookup();
                ViewBag.DepartmentsLookup = _departmentRepo.GetLookup();
                ViewBag.companyId = companyId;
                ViewBag.departmentId = departmentId;

                var requisitionList = _requisitionRepo.GetApprovedRequisition( sDateTime, eDateTime, companyId, departmentId).Where(c=> c.WorkflowLevelId == 9 ).ToList(); 
                return View(requisitionList);
            }
            return View(new List<RequisitionViewModel>());
        }
    }
}
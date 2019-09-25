using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ExpenseManager.Helper.Repositories;
using ExpenseManager.Helper.Utilities;
using ExpenseManager.Helper.ViewModels;
using Microsoft.AspNet.Identity;

namespace ExpenseManager.Web.Controllers
{
    public class PendingRequisitionController : Controller
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
        public PendingRequisitionController()
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
        // GET: PendingRequisition
        public ActionResult Index()
        {
            ViewBag.CompaniesLookup = _companyRepo.GetLookup();
            ViewBag.DepartmentsLookup = _departmentRepo.GetLookup();
            return View(new RequisitionSearchObj());
        }
    
    }
}
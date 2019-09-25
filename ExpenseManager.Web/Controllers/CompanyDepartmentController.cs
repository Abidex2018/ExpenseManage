using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ExpenseManager.Helper.Repositories;
using ExpenseManager.Helper.ViewModels;
using Microsoft.AspNet.Identity;

namespace ExpenseManager.Web.Controllers
{
    [Authorize]
    public class CompanyDepartmentController : Controller
    {
       
        private readonly CompanyDepartmentRepository _comDepartmentRepo;
        private readonly CompanyRepository _companyRepo;
        private readonly DepartmentRepository _departmentRepo;
        private readonly UserRepository _userRepo;
        public CompanyDepartmentController()
        {            
            _comDepartmentRepo = new CompanyDepartmentRepository();
            _companyRepo = new CompanyRepository();
            _departmentRepo = new DepartmentRepository();
            _userRepo = new UserRepository();
        }
        public ActionResult Index()
        {
            int companyId = 0;
            int departmentId = 0;
            var items = _comDepartmentRepo.GetAll().ToList();
            ViewBag.CompaniesLookup = _companyRepo.GetLookup();
            ViewBag.companyId = companyId;
            ViewBag.DepartmentsLookup = _departmentRepo.GetLookup();
            ViewBag.departmentId = departmentId;
            return View(items);
        }
        public ActionResult DepartmentCompanyByCompanyList(int companyId = 0)
        {
            try
            {
                if (companyId == 0)
                {
                    var userList = _comDepartmentRepo.GetAll().ToList();
                    return PartialView(userList);
                }
                else
                {
                    var userList = _comDepartmentRepo.GetAllByCompany(companyId).ToList();
                    return PartialView(userList);
                }

            }
            catch (Exception ex)
            {
                return PartialView(new List<UserViewModel>());
            }


        }
        public JsonResult GetLookup(int companyId)
        {
            try
            {
                var items = _comDepartmentRepo.GetLookup(companyId).ToList();
                return Json(new { IsAuthenticated = true, IsSuccessful = true, Items = items }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = "Process Error Occurred! Please try again later" });
            }
        }
        public JsonResult GetLookupDepartment(int companyId)
        {
            try
            {
                var items = _comDepartmentRepo.GetLookupdepartment(companyId).ToList();
                return Json(new { IsAuthenticated = true, IsSuccessful = true, Items = items }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = "Process Error Occurred! Please try again later" });
            }
        }
        public JsonResult GetLookupForRequisition(int companyId)
        {
            try
            {
                var items = _comDepartmentRepo.GetLookup(companyId).ToList();
                var userProfile = _userRepo.GetById(User.Identity.GetUserId());
                if (!userProfile.CanCreateRequestForOtherDept)
                {
                    items = items.Where(x => x.Id == userProfile.CompanyDepartmentId).ToList();
                }
                            
                return Json(new { IsAuthenticated = true, IsSuccessful = true, Items = items }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = "Process Error Occurred! Please try again later" });
            }
        }
        public ActionResult AddDepartment()
        {
            try
            {
                ViewBag.CompaniesLookup = _companyRepo.GetLookup();
                ViewBag.DepartmentsLookup = _departmentRepo.GetLookup();
                return PartialView(new DepartmentViewModel());
            }
            catch (Exception ex)
            {
                return PartialView(new DepartmentViewModel());
            }
        }
        public JsonResult CreateDepartment(DepartmentViewModel model)
        {
            try
            {
                
                _comDepartmentRepo.Create(model);
                return Json(new { IsAuthenticated = true, IsSuccessful = true });
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = ex.Message });
            }
        }

        public ActionResult EditDepartment(int compDepartmentId)
        {
            try
            {
                var item = _comDepartmentRepo.GetById(compDepartmentId);
                ViewBag.CompaniesLookup = _companyRepo.GetLookup();
                ViewBag.DepartmentsLookup = _departmentRepo.GetLookup();

                return PartialView(item);
            }
            catch (Exception ex)
            {
                return PartialView(new DepartmentViewModel());
            }
        }
        public JsonResult UpdateDepartment(DepartmentViewModel model)
        {
            try
            {

                _comDepartmentRepo.Update(model);
                return Json(new { IsAuthenticated = true, IsSuccessful = true });
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = ex.Message });
            }
        }

    }
}
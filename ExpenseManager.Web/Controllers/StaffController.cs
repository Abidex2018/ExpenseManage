using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ExpenseManager.Helper.Repositories;
using ExpenseManager.Helper.ViewModels;

namespace ExpenseManager.Web.Controllers
{
    [Authorize]
    public class StaffController : Controller
    {
       
        private readonly StaffRepository _staffRepo;
        private readonly CompanyRepository _companyRepo;
        private readonly CompanyDepartmentRepository _compDepartmentRepo;
        private readonly UserRepository _userRepo;
        public StaffController()
        {
            
            _staffRepo = new StaffRepository();
            _compDepartmentRepo = new CompanyDepartmentRepository();
            _companyRepo = new CompanyRepository();
            _userRepo = new UserRepository();

        }
        public ActionResult Index()
        {
            var items = _staffRepo.GetAll().ToList();
            int companyId = 0;

            ViewBag.CompaniesLookup = _companyRepo.GetLookup();
            ViewBag.companyId = companyId;
            return View(items);
        }

        public ActionResult GetStaffByCompanyList(int companyId = 0)
        {
            try
            {
                if (companyId == 0)
                {
                    var staffList = _staffRepo.GetAll().ToList();
                            return PartialView(staffList);
                }
                else
                {
                    var staffList = _staffRepo.GetByCompany(companyId).ToList();
                    return PartialView(staffList);
                }
                
            }
            catch (Exception ex)
            {
                return PartialView(new List<StaffViewModel>());
            }

            
        }
        //public ActionResult GetStaffByCompanyList()
        //{
        //    try
        //    {
        //        var staffList = _staffRepo.GetAll().ToList();
        //        return PartialView(staffList);
        //    }
        //    catch (Exception ex)
        //    {
        //        return PartialView(new List<StaffViewModel>());
        //    }


        //}
        public JsonResult GetLookup(int departmentId)
        {
            try
            {
                var items = _staffRepo.GetLookup(departmentId).ToList();
                return Json(new { IsAuthenticated = true, IsSuccessful = true, Items = items }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = "Process Error Occurred! Please try again later" });
            }
        }
        public JsonResult GetStaffByCompany(int companyId)
        {
            try
            {
                var items = _staffRepo.GetByCompany(companyId);
                return Json(new { IsAuthenticated = true, IsSuccessful = true, Items = items }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = ex.Message });
            }
        }
        public ActionResult AddStaff()
        {
            try
            {
                ViewBag.CompaniesLookup = _companyRepo.GetLookup();
                ViewBag.CompDepartmentsLookup = new List<LookupModel>();
                ViewBag.UsersLookup = new List<LookupModel>();
                
                return PartialView(new StaffViewModel());
            }
            catch (Exception ex)
            {
                return PartialView(new StaffViewModel());
            }
        }
        public JsonResult CreateStaff(StaffViewModel model)
        {
            try
            {

                _staffRepo.Create(model);
                return Json(new { IsAuthenticated = true, IsSuccessful = true });
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = ex.Message });
            }
        }

        public ActionResult EditStaff(string staffId)
        {
            try
            {
                var item = _staffRepo.GetById(staffId);
                //ViewBag.CompaniesLookup = _companyRepo.GetLookup();
                //ViewBag.CompDepartmentsLookup = _compDepartmentRepo.GetLookup(item.CompanyId).ToList();
                //ViewBag.UsersLookup = _userRepo.GetLookup(item.CompanyDepartmentId);
                return PartialView(item);
            }
            catch (Exception ex)
            {
                return PartialView(new StaffViewModel());
            }
        }
        public JsonResult UpdateStaff(StaffViewModel model)
        {
            try
            {

                _staffRepo.Update(model);
                return Json(new { IsAuthenticated = true, IsSuccessful = true });
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = ex.Message });
            }
        }
    }
}
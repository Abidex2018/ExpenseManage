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
    public class DepartmentController : Controller
    {
       
        private readonly DepartmentRepository _departmentRepo;
        private readonly CompanyRepository _companyRepo;

        public DepartmentController()
        {            
            _departmentRepo = new DepartmentRepository();
            _companyRepo = new CompanyRepository();
        }
        public ActionResult Index()
        {
            var items = _departmentRepo.GetAll().ToList();
            return View(items);
        }

        public JsonResult GetLookup(int companyId)
        {
            try
            {
                var items = _departmentRepo.GetLookup().ToList();
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
                
                _departmentRepo.Create(model);
                return Json(new { IsAuthenticated = true, IsSuccessful = true });
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = ex.Message });
            }
        }

        public ActionResult EditDepartment(int departmentId)
        {
            try
            {
                var item = _departmentRepo.GetById(departmentId);
                ViewBag.CompaniesLookup = _companyRepo.GetLookup();
              
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

                _departmentRepo.Update(model);
                return Json(new { IsAuthenticated = true, IsSuccessful = true });
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = ex.Message });
            }
        }
        public JsonResult Delete(int departmentId)
        {
            try
            {
                _departmentRepo.Delete(departmentId);
                return Json(new { IsAuthenticated = true, IsSuccessful = true });
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = ex.Message });
            }
        }
    }
}
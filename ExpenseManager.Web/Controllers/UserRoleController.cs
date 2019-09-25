using ExpenseManager.Helper.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ExpenseManager.Helper.ViewModels;

namespace ExpenseManager.Web.Controllers
{
    public class UserRoleController : Controller
    {
        private readonly UserRoleRepository _userRoleRepo;
        private readonly ApprovalWorkflowLevelRepository _workflowLevelRepo;
        

        public UserRoleController()
        {
            _userRoleRepo = new UserRoleRepository();
            _workflowLevelRepo = new ApprovalWorkflowLevelRepository();
        }
        public ActionResult Index()
        {
            var items = _userRoleRepo.GetAll().ToList();
            return View(items);
        }
        public ActionResult EditRole(int userRoleId)
        {
            try
            {
                var item = _userRoleRepo.GetById(userRoleId);
                ViewBag.WorkflowLevelsLookup = _workflowLevelRepo.GetLookup();

                return PartialView(item);
            }
            catch (Exception ex)
            {
                return PartialView(new UserRoleModel());
            }
        }
        public JsonResult UpdateRole(UserRoleModel model)
        {
            try
            {

                _userRoleRepo.Update(model);
                return Json(new { IsAuthenticated = true, IsSuccessful = true });
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = ex.Message });
            }
        }
        
    }
}
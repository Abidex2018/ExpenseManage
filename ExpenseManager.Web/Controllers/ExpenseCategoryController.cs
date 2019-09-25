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
    public class ExpenseCategoryController : Controller
    {
       
        private readonly ExpenseCategoryRepository _expenseCatRepo;
       

        public ExpenseCategoryController()
        {

            _expenseCatRepo = new ExpenseCategoryRepository();
            

        }
        public ActionResult Index()
        {
            var items = _expenseCatRepo.GetAll().ToList();
            return View(items);
        }
        public ActionResult AddCategory()
        {
            try
            {
                
                return PartialView(new ExpenceCategoryViewModel());
            }
            catch (Exception ex)
            {
                return PartialView(new ExpenceCategoryViewModel());
            }
        }
        public JsonResult CreateCategory(ExpenceCategoryViewModel model)
        {
            try
            {
              
                if (string.IsNullOrEmpty(model.Name) || model.Name.Length < 2)
                {
                    return Json(new { IsAuthenticated = false, IsSuccessful = false, IsReload = true, Error = "Invalid Expense Category" });
                }
                _expenseCatRepo.Create(model);
                return Json(new { IsAuthenticated = true, IsSuccessful = true });
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = ex.Message });
            }
        }

        public ActionResult EditCategory(int categoryId)
        {
            try
            {
                var item = _expenseCatRepo.GetById(categoryId);
             

                return PartialView(item);
            }
            catch (Exception ex)
            {
                return PartialView(new ExpenceCategoryViewModel());
            }
        }
        public JsonResult UpdateCategory(ExpenceCategoryViewModel model)
        {
            try
            {

                _expenseCatRepo.Update(model);
                return Json(new { IsAuthenticated = true, IsSuccessful = true });
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = ex.Message });
            }
        }
    }
}
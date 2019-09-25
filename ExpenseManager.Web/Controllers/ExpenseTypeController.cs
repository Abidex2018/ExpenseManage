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
    public class ExpenseTypeController : Controller
    {
       
        private readonly ExpenseTypeRepository _expenseTypeRepo;
        private readonly ExpenseCategoryRepository _expCategoryRepo;

        public ExpenseTypeController()
        {

            _expenseTypeRepo = new ExpenseTypeRepository();
            _expCategoryRepo = new ExpenseCategoryRepository();

        }
        public ActionResult Index()
        {
            int expenseCategoryId = 0;
            var items = _expenseTypeRepo.GetAll().ToList();
            ViewBag.ExpenseCategoriesLookup = _expCategoryRepo.GetLookup();
            ViewBag.expenseCategoryId = expenseCategoryId;
            return View(items);
        }

        public ActionResult ExpenseTypeByCategoryList(int expenseCategoryId = 0)
        {
            try
            {
                if (expenseCategoryId == 0)
                {
                    var expenseTypeList = _expenseTypeRepo.GetAll().ToList();
                    return PartialView(expenseTypeList);
                }
                else
                {
                    var expenseTypeList = _expenseTypeRepo.GetAllByCategory(expenseCategoryId).ToList();
                    return PartialView(expenseTypeList);
                }
               

            }
            catch (Exception ex)
            {
                return PartialView(new List<ExpenceTypeViewModel>());
            }


        }
        public JsonResult GetLookup(int expenseCategoryId)
        {
            try
            {
                var items = _expenseTypeRepo.GetLookup(expenseCategoryId).ToList();
                return Json(new { IsAuthenticated = true, IsSuccessful = true, Items = items }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = "Process Error Occurred! Please try again later" });
            }
        }
        public ActionResult AddExpenseType()
        {
            try
            {
                ViewBag.ExpenseCategoriesLookup = _expCategoryRepo.GetLookup();
                return PartialView(new ExpenceTypeViewModel());
            }
            catch (Exception ex)
            {
                return PartialView(new ExpenceTypeViewModel());
            }
        }
        public JsonResult CreateExpenseType(ExpenceTypeViewModel model)
        {
            try
            {
                if (model.ExpenseCategoryId < 1)
                {
                    return Json(new { IsAuthenticated = true, IsSuccessful = false, IsReload = false, Error = "Invalid Expense Category" });
                }
              
                if (string.IsNullOrEmpty(model.Name) || model.Name.Length < 2)
                {
                    return Json(new { IsAuthenticated = false, IsSuccessful = false, IsReload = true, Error = "Invalid Expense Type Name" });
                }
                _expenseTypeRepo.Create(model);
                return Json(new { IsAuthenticated = true, IsSuccessful = true });
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = ex.Message });
            }
        }

        public ActionResult EditExpenseType(int expenseTypeId)
        {
            try
            {
                ViewBag.ExpenseCategoriesLookup = _expCategoryRepo.GetLookup();
                var item = _expenseTypeRepo.GetById(expenseTypeId);
                return PartialView(item);
            }
            catch (Exception ex)
            {
                return PartialView(new ExpenceTypeViewModel());
            }
        }
        public JsonResult UpdateExpenseType(ExpenceTypeViewModel model)
        {
            try
            {
                _expenseTypeRepo.Update(model);
                return Json(new { IsAuthenticated = true, IsSuccessful = true });
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = ex.Message });
            }
        }
    }
}
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
    public class ExpenseItemController : Controller
    {
       
        private readonly ExpenseItemRepository _expenseItemRepo;
        private readonly ExpenseCategoryRepository _expCategoryRepo;
        private readonly ExpenseTypeRepository _expenseTypeRepo;
        public ExpenseItemController()
        {

            _expenseItemRepo = new ExpenseItemRepository();
            _expCategoryRepo = new ExpenseCategoryRepository();
            _expenseTypeRepo = new ExpenseTypeRepository();
        }
        public ActionResult Index()
        {
            var items = _expenseItemRepo.GetAll().ToList();
            int expenseCategoryId = 0;
            ViewBag.ExpenseCategoriesLookup = _expCategoryRepo.GetLookup();
            ViewBag.expenseCategoryId = expenseCategoryId;
         
            return View(items);
        }
        public ActionResult ExpenseItemByCategory_Or_Type_List(int expenseCategoryId = 0, int expenseTypeId = 0)
        {
            try
            {
                if (expenseCategoryId == 0)
                {
                    var expenseTypeList = _expenseItemRepo.GetAllCategoryOrType(expenseCategoryId,expenseTypeId).ToList();
                    return PartialView(expenseTypeList);
                }
                else if (expenseTypeId == 0)
                {
                    var expenseTypeList = _expenseItemRepo.GetAllCategoryOrType(expenseCategoryId, expenseTypeId).ToList();
                    return PartialView(expenseTypeList);
                }
                else
                {
                    var expenseTypeList = _expenseItemRepo.GetAllCategoryOrType(expenseCategoryId,expenseTypeId).ToList();
                    return PartialView(expenseTypeList);
                }


            }
            catch (Exception ex)
            {
                return PartialView(new List<ExpenceTypeViewModel>());
            }


        }
        public JsonResult GetLookup(int expenseTypeId)
        {
            try
            {
                var items = _expenseItemRepo.GetLookup(expenseTypeId).ToList();
                return Json(new { IsAuthenticated = true, IsSuccessful = true, Items = items }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = "Process Error Occurred! Please try again later" });
            }
        }
        public ActionResult AddExpenseItem()
        {
            try
            {
                ViewBag.ExpenseCategoriesLookup = _expCategoryRepo.GetLookup();
                ViewBag.ExpenseTypesLookup = new List<LookupModel>();
                return PartialView(new ExpenceItemViewModel());
            }
            catch (Exception ex)
            {
                return PartialView(new ExpenceItemViewModel());
            }
        }
        public JsonResult CreateExpenseItem(ExpenceItemViewModel model)
        {
            try
            {
                if (model.ExpenseCategoryId < 1)
                {
                    return Json(new { IsAuthenticated = true, IsSuccessful = false, IsReload = false, Error = "Invalid Expense Category" });
                }
                if (model.ExpenseTypeId < 1)
                {
                    return Json(new { IsAuthenticated = true, IsSuccessful = false, IsReload = false, Error = "Invalid Expense Type" });
                }
                if (string.IsNullOrEmpty(model.Name) || model.Name.Length < 2)
                {
                    return Json(new { IsAuthenticated = false, IsSuccessful = false, IsReload = true, Error = "Invalid Item Name" });
                }
                _expenseItemRepo.Create(model);
                return Json(new { IsAuthenticated = true, IsSuccessful = true });
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = ex.Message });
            }
        }

        public ActionResult EditExpenseItem(int expenseItemId)
        {
            try
            {
                ViewBag.ExpenseCategoriesLookup = _expCategoryRepo.GetLookup();
                
                var item = _expenseItemRepo.GetById(expenseItemId);
                ViewBag.ExpenseTypesLookup = _expenseTypeRepo.GetLookup(item.ExpenseCategoryId);
                return PartialView(item);
            }
            catch (Exception ex)
            {
                return PartialView(new ExpenceItemViewModel());
            }
        }
        public JsonResult UpdateExpenseItem(ExpenceItemViewModel model)
        {
            try
            {

                _expenseItemRepo.Update(model);
                return Json(new { IsAuthenticated = true, IsSuccessful = true });
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = ex.Message });
            }
        }
    }
}
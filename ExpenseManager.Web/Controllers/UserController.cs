using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using ExpenseManager.Helper.Entities;
using ExpenseManager.Helper.Repositories;
using ExpenseManager.Helper.ViewModels;
using ExpenseManager.Web.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;

namespace ExpenseManager.Web.Controllers
{
    [Authorize]
    public class UserController : Controller
    {
        // GET: Base
        private ApplicationSignInManager _signInManager;
        private ApplicationUserManager _userManager;
        private readonly CompanyDepartmentRepository _comDepartmentRepo;
        private readonly UserRepository _userRepo;
        private readonly CompanyRepository _companyRepo;
        private readonly DepartmentRepository _departmentRepo;
        private readonly UserRoleRepository _userRoleRepo;
        public UserController()
        {
            _userRepo = new UserRepository();
            _companyRepo = new CompanyRepository();
            _comDepartmentRepo = new CompanyDepartmentRepository();
            _userRoleRepo = new UserRoleRepository();
        }
       

        public UserController(ApplicationUserManager userManager, ApplicationSignInManager signInManager)
        {
            UserManager = userManager;
            SignInManager = signInManager;
            _userRepo = new UserRepository();
            _companyRepo = new CompanyRepository();
            _userRoleRepo = new UserRoleRepository();
            _comDepartmentRepo = new CompanyDepartmentRepository();
        }

        public ApplicationSignInManager SignInManager
        {
            get
            {
                return _signInManager ?? HttpContext.GetOwinContext().Get<ApplicationSignInManager>();
            }
            private set
            {
                _signInManager = value;
            }
        }

        public ApplicationUserManager UserManager
        {
            get
            {
                return _userManager ?? HttpContext.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
            private set
            {
                _userManager = value;
            }
        }
        public ActionResult Index()
        {
            var userList = _userRepo.GetAll();
            int companyId = 0;
          
            ViewBag.CompaniesLookup = _companyRepo.GetLookup();
            ViewBag.companyId = companyId;
          
           
           
            return View(userList);
        }

        public ActionResult AddUser()
        {
            try
            {
                ViewBag.CompaniesLookup = _companyRepo.GetLookup();
                ViewBag.CompDepartmentsLookup = new List<LookupModel>();
                ViewBag.UserRolesLookup = _userRoleRepo.GetLookup();
                return PartialView(new RegisterViewModel());
            }
            catch (Exception ex)
            {
                return PartialView(new RegisterViewModel());
            }
           
        }

        public ActionResult GetUserByCompanyList(int companyId = 0)
        {
            try
            {
                if (companyId == 0)
                {
                    var userList = _userRepo.GetAll().ToList();
                    return PartialView(userList);
                }
                else
                {
                    var userList = _userRepo.GetByCompany(companyId).ToList();
                    return PartialView(userList);
                }

            }
            catch (Exception ex)
            {
                return PartialView(new List<UserViewModel>());
            }


        }
        public async Task<JsonResult> CreateUser(RegisterViewModel model )
        {

            var user = new ApplicationUser
            {
                UserName = model.Email,
                Email = model.Email,
                PhoneNumber = model.PhoneNumber,
                UserRoleId = model.UserRoleId,
                CompanyDepartmentId = model.CompanyDepartmentId,
                FirstName = model.FirstName,
                LastName = model.LastName
            };
            try
            {
                var errorMsg = string.Empty;
                if (ModelState.IsValid)
                {
                    var emailExists = _userRepo.IsEmailExist(model.Email);
                    if (emailExists)
                    {
                        return Json(new { IsSuccessful = false, Error = "Sorry, this email already exists" });
                    }
                  
                    var result = await UserManager.CreateAsync(user, model.Password);
                    if (result.Succeeded)
                    {
                        //foreach (var item in model.CompanyId)
                        //{
                        //    var userc = new Helper.Entities.UserCompany
                        //    {
                        //        UserId = user.Id,
                        //        CompanyId = item,
                        //    };

                        //    _userRepo.CreateUserCompany(userc);
                        //    if (userc.User_CompanyId < 1)
                        //    {
                        //        return Json(new { IsSuccessful = false, Error = "Sorry, Invalid Entry" });
                        //    }
                        //}
                       
                        return Json(new { IsSuccessful = true, Message = "User submitted successfully" }, JsonRequestBehavior.AllowGet);
                        //return RedirectToAction("RegistrationConfirmation", "Account");
                    }
                    errorMsg = result.Errors.FirstOrDefault();
                    return Json(new { IsSuccessful = false, Error = errorMsg });
                }

                errorMsg = string.Join(" | ", ModelState.Values.SelectMany(v => v.Errors)
                                                      .Select(e => e.ErrorMessage));


                return Json(new { IsSuccessful = false, Error = errorMsg });
            }
            catch (Exception ex)
            {
                _userRepo.DeleteUser(user.Id);
                return Json(new { IsSuccessful = false, Error = ex.InnerException.InnerException.Message });
            }
        }
        public ActionResult EditUser(string userId)
        {
            try
            {
                ViewBag.CompaniesLookup = _companyRepo.GetLookup();
                ViewBag.UserRolesLookup = _userRoleRepo.GetLookup();
                var item = _userRepo.GetById(userId);
                ViewBag.CompDepartmentsLookup = new List<LookupModel>();

                return PartialView(item);
            }
            catch (Exception ex)
            {
                return PartialView(new UserViewModel());
            }

        }
        public JsonResult UpdateUser(UserViewModel model)
        {
            try
            {
                _userRepo.UpdateUser(model.Id, model);
                return Json(new { IsAuthenticated = true, IsSuccessful = true });
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = ex.Message });
            }
        }
        public JsonResult GetLookupForStaffCreation(int compDepartmentId)
        {
            try
            {
                var items = _userRepo.GetLookupForStaffCreation(compDepartmentId).ToList();
                return Json(new { IsAuthenticated = true, IsSuccessful = true, Items = items }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { IsAuthenticated = true, IsSuccessful = false, Error = "Process Error Occurred! Please try again later" });
            }
        }
        
    }
}
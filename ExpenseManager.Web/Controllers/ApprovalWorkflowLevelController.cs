using ExpenseManager.Helper.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ExpenseManager.Web.Controllers
{
    public class ApprovalWorkflowLevelController : Controller
    {
        private readonly ApprovalWorkflowLevelRepository _approvalWorkflowRepositoryRepo;
       

        public ApprovalWorkflowLevelController()
        {
            _approvalWorkflowRepositoryRepo = new ApprovalWorkflowLevelRepository();
            
        }
        public ActionResult Index()
        {
            var items = _approvalWorkflowRepositoryRepo.GetAll().ToList();
            return View(items);
        }

    }
}
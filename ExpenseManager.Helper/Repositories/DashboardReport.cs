using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ExpenseManager.Helper.Entities;
using ExpenseManager.Helper.Utilities;
using ExpenseManager.Helper.ViewModels;

namespace ExpenseManager.Helper.Repositories
{
    public class DashboardReport
    {
        private readonly ExpenseManagerEntities _dBContext;
        public DashboardReport()
        {
            this._dBContext = new ExpenseManagerEntities();
        }
        public DashboardReportModel GetStatisticReports()
        {
            var reportModel = new DashboardReportModel();

            var awaitingGmStatus = (int) RequisitionWorkflow.AwaitingApprovalLevelTwo;
            var awaitingGmEntities = _dBContext.ExpenseRequisitions.Where(x => x.WorkflowLevelId == awaitingGmStatus);
            reportModel.TotalAwaitingGm = awaitingGmEntities.Any() ? awaitingGmEntities.Count() : 0;

            var awaitingAccountHeadStatus = (int)RequisitionWorkflow.AwaitingApprovalLevelThree;
            var awaitingAccountEntities = _dBContext.ExpenseRequisitions.Where(x => x.WorkflowLevelId == awaitingAccountHeadStatus);
            reportModel.TotalAwaitingAccountHead = awaitingAccountEntities.Any() ? awaitingAccountEntities.Count() : 0;


            var pendingStatus = (int)RequisitionWorkflow.Pending;
            var pendingEntities = _dBContext.ExpenseRequisitions.Where(x => x.WorkflowLevelId == pendingStatus);
            reportModel.TotalPendingRequisition = pendingEntities.Any() ? pendingEntities.Count() : 0;

            var rejectedStatus = (int)RequisitionStatus.Rejected;
            var rejectedEntities = _dBContext.ExpenseRequisitions.Where(x => x.Status == rejectedStatus);
            reportModel.TotalRejected = rejectedEntities.Any() ? rejectedEntities.Count() : 0;

            var parialApprovalStatus = (int)RequisitionStatus.PartialApproval;
            var partialApprovedEntities = _dBContext.ExpenseRequisitions.Where(x => x.Status == parialApprovalStatus);
            reportModel.TotalPartialApproval = partialApprovedEntities.Any() ? partialApprovedEntities.Count() : 0;


            return reportModel;
        }
    }
   
}

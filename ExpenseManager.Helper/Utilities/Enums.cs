using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.Helper.Utilities
{
    public enum RequisitionStatus
    {
        Pending = 1,
        Rejected = 2,
        AwaitingApproval = 3,
        PartialApproval = 4,
        Approved = 5,
        Retired =6,
        Closed=7

    }
    public enum RequisitionWorkflow
    {
        Returned = -1,
        Pending = 0,
        AwaitingApprovalLevelOne = 1,
        AwaitingApprovalLevelTwo = 2,
        AwaitingApprovalLevelThree = 3,
        AwaitingApprovalLevelFour = 4,
        Closed = 6,
        Completed = 5
    }

    public enum UserRoleType
    {
        OtherUser = 1,
        HeadOfDepartment = 2,
        Admin = 3,
        GeneralManager = 4,
        HeadOfAccount = 5,
        Executive = 6,
    }
}

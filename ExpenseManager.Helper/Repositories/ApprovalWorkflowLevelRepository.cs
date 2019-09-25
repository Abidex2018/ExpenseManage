using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ExpenseManager.Helper.Entities;
using ExpenseManager.Helper.ViewModels;

namespace ExpenseManager.Helper.Repositories
{
    public class ApprovalWorkflowLevelRepository
    {
        private readonly ExpenseManagerEntities _dBContext;
        public ApprovalWorkflowLevelRepository()
        {
            this._dBContext = new ExpenseManagerEntities();
        }
        public List<WorkflowLevelModel> GetAll()
        {
            try
            {
                var expenseLists = _dBContext.WorkflowLevels.Where(x => x.LevelNo > 0).ToList();

                return expenseLists.Select(item => new WorkflowLevelModel
                {

                    Id = item.Id,
                    Name = item.Name,
                   LevelNo = item.LevelNo

                }).ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
        public List<LookupModel> GetLookup()
        {
            try
            {
                var expenseLists = _dBContext.WorkflowLevels.Where(x => x.LevelNo > 0).ToList();

                return expenseLists.Select(item => new LookupModel
                {
                    
                    Id = item.Id,
                    Name = $"{item.Name} - (Level {item.LevelNo})"
                }).ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
        public WorkflowLevelModel GetByEnumType(int requisitionWorkflow)
        {
            var entity = _dBContext.WorkflowLevels.SingleOrDefault(x => x.EnumType == requisitionWorkflow);
            if (entity != null)
            {
                var returnData = new WorkflowLevelModel
                {
                    Id = entity.Id,
                    Name = entity.Name,
                    EnumType = entity.EnumType,
                    LevelNo = entity.LevelNo

                };

                return returnData;
            }
            throw new Exception("Workflow item NOT found!");
        }
    }
}

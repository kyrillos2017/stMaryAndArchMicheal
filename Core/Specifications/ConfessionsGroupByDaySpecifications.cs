using Core.Entities;

namespace Core.Specifications
{
    public class ConfessionsGroupByDaySpecifications : BaseSpecification<Confessions>
    {
        public ConfessionsGroupByDaySpecifications()
        {
            AddOrderBy(x => x.DisplayOrder);
            // AddGroupBy(x => x.Day);
        }
    }
}
using Core.Entities;

namespace Core.Specifications
{
    public class ConfessionsGroupByDaySpecifications : BaseSpecification<Confessions>
    {
        public ConfessionsGroupByDaySpecifications()
        {
            AddOrderBy(x => x.DisplayOrder);
            // GroupListBy(x => x.Day);

            //AddSelect()

        }
    }
}
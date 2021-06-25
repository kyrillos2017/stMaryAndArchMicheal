using Core.Entities;
using Core.Specifications.Params;

namespace Core.Specifications
{
    public class FathersSpecificationsWithConfessions : BaseSpecification<Fathers>
    {
        public FathersSpecificationsWithConfessions(FathersParams fathersParams)
        : base(x => (string.IsNullOrEmpty(fathersParams.Search) || x.Name.ToLower().Contains(fathersParams.Search)))
        {
            AddInclude(x => x.Confessions);
            AddOrderBy(x => x.Name);
            ApplyPaging(fathersParams.PageSize, fathersParams.PageSize * (fathersParams.PageIndex - 1));
        }

        public FathersSpecificationsWithConfessions(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.Confessions);
        }
    }
}
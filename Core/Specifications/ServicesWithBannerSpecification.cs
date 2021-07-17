using Core.Entities;

namespace Core.Specifications
{
    public class ServicesWithBannerSpecification : BaseSpecification<ChurchService>
    {
        public ServicesWithBannerSpecification()
        {
            AddInclude(x => x.Banner);
            AddOrderBy(x => x.DisplayOrder);
        }
    }
}
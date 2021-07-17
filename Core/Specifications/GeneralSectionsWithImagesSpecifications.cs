using Core.Entities;

namespace Core.Specifications
{
    public class GeneralSectionsWithImagesSpecifications : BaseSpecification<GeneralSection>
    {
        public GeneralSectionsWithImagesSpecifications()
        {
            AddInclude(x => x.Banner);
            AddOrderBy(x => x.DisplayOrder);
        }
    }
}
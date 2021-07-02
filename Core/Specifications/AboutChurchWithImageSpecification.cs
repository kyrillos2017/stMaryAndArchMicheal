using Core.Entities;

namespace Core.Specifications
{
    public class AboutChurchWithImageSpecification : BaseSpecification<AboutChurch>
    {
        public AboutChurchWithImageSpecification()
        {
            AddInclude(x => x.Banner);
            AddInclude(x => x.Image);
        }
    }
}
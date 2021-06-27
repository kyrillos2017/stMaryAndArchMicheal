using Core.Entities;

namespace Core.Specifications
{
    public class SundayMeetingSpecifications : BaseSpecification<SundayMeeting>
    {
        public SundayMeetingSpecifications()
        {
            AddOrderBy(x => x.DisplayOrder);
        }
    }
}
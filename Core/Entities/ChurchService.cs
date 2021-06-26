namespace Core.Entities
{
    public class ChurchService : BaseEntity
    {
        public bool IsActive { get; set; }
        public string BannerImgUrl { get; set; }
        public string Description { get; set; }
    }
}
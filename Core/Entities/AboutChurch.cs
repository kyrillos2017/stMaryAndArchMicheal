namespace Core.Entities
{
    public class AboutChurch : BaseEntity
    {
        public bool IsActive { get; set; }
        public string ImgUrl { get; set; }
        public string BannerImgUrl { get; set; }
        public string Description { get; set; }
    }
}
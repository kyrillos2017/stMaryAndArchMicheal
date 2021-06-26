namespace API.Dtos
{
    public class ChurchServiceDto
    {
        public int? Id { get; set; }
        public bool IsActive { get; set; }
        public string BannerImgUrl { get; set; }
        public string Description { get; set; }
    }
}
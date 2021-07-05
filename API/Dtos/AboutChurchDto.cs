namespace API.Dtos
{
    public class AboutChurchDto
    {
        public bool IsActive { get; set; }
        public ImageAssetsDto Image { get; set; }
        public ImageAssetsDto Banner { get; set; }
        public string Description { get; set; }
    }
}
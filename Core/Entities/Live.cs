namespace Core.Entities
{
    public class Live : BaseEntity
    {
        public Live()
        {
        }

        public Live(bool isActive, string videoId)
        {
            IsActive = isActive;
            VideoId = videoId;
        }

        public bool IsActive { get; set; }
        public string VideoId { get; set; }
    }
}
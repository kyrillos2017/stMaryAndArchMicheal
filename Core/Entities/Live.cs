namespace Core.Entities
{
    public class Live
    {
        public Live()
        {
        }

        public Live(bool isActive, string videoId)
        {
            IsActive = isActive;
            VideoId = videoId;
        }

        public int? Id { get; set; } = 1;
        public bool IsActive { get; set; } = false;
        public string VideoId { get; set; }
    }
}
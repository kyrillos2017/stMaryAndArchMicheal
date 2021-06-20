using System;

namespace Core.Entities
{
    public class ConfessionCalender : BaseEntity
    {
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Place { get; set; }
        public bool IsActive { get; set; } = true;
    }
}
using System;

namespace API.Dtos
{
    public class ConfessionsCalenderDto
    {
        public int Id { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Place { get; set; }
        public bool IsActive { get; set; } = true;
    }
}
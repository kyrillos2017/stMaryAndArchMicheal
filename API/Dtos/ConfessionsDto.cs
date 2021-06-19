using System.Collections.Generic;

namespace API.Dtos
{
    public class ConfessionsDto
    {
        public int Id { get; set; }
        public string Day { get; set; }
        public IReadOnlyList<ConfessionsCalenderDto> Calender { get; set; }
    }
}
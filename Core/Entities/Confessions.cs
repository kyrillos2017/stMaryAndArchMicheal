using System.Collections.Generic;
using Core.Entities.Enums;

namespace Core.Entities
{
    public class Confessions : BaseEntity
    {
        public DaysEnum Day { get; set; }
        public IReadOnlyList<ConfessionCalender> Calender { get; set; }
    }
}
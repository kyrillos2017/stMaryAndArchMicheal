using System.Collections.Generic;
using Core.Entities.Enums;

namespace Core.Entities
{
    public class Confessions : BaseEntity
    {
        public DaysEnum Day { get; set; }
        public ICollection<ConfessionCalender> Calender { get; set; }
        public int FatherId { get; set; }
        public Fathers Fathers { get; set; }
    }
}
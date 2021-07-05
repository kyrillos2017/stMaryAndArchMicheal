using System;
using System.Collections.Generic;
using Core.Entities.Enums;

namespace Core.Entities
{
    public class Mass : BaseEntity
    {
        public Mass()
        {
        }

        public Mass(DaysEnum day, int order, DateTime? date)
        {
            Day = day;
            Order = order;
            Date = date;
        }

        public DaysEnum Day { get; set; }
        public int Order { get; set; } = 100;
        public DateTime? Date { get; set; }
        public virtual IReadOnlyList<MassEvent> MassEvent { get; set; }
    }
}
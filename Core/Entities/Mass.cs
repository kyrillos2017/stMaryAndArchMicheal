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

        public Mass(int secId, DaysEnum day, int order, DateTime? date)
        {
            SecId = secId;
            Day = day;
            Order = order;
            Date = date;
        }

        public int SecId { get; set; }
        public DaysEnum Day { get; set; }
        public int Order { get; set; } = 100;
        public DateTime? Date { get; set; }
        public virtual IReadOnlyList<MassEvent> MassEvent { get; set; }
    }
}
using System;
using Core.Entities.Enums;

namespace Core.Inputs
{
    public class CreateMassIntput
    {
        public int? massId { get; set; }
        public int? massEventId { get; set; }
        public DaysEnum Day { get; set; }
        public int Order { get; set; } = 100;
        public DateTime? Date { get; set; }

        public string Name { get; set; }
        public MassEventsEnum Type { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Place { get; set; }
        public bool IsActive { get; set; }
    }
}
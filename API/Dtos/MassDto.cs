using System;
using System.Collections.Generic;
using Core.Entities.Enums;

namespace API.Dtos
{
    public class MassDto
    {
        public int? Id { get; set; }
        public DaysEnum Day { get; set; }
        public int Order { get; set; } = 100;
        public DateTime? Date { get; set; }
        public IReadOnlyList<MassEventDto> MassEvent { get; set; }
    }
}
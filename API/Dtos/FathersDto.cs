using System;
using System.Collections.Generic;

namespace API.Dtos
{
    public class FathersDto
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string PriestlyRank { get; set; }
        public DateTime PriestlyDate { get; set; }
        public bool IsDead { get; set; } = false;
        public DateTime? DeathDate { get; set; }
        public string About { get; set; }
        public string ImgUrl { get; set; }
        public IReadOnlyList<ConfessionsDto> Confessions { get; set; }
    }
}
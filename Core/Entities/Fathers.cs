using System;
using System.Collections.Generic;

namespace Core.Entities
{
    public class Fathers : BaseEntity
    {
        public string Name { get; set; }
        public string PriestlyRank { get; set; }
        public DateTime PriestlyDate { get; set; }
        public bool IsDead { get; set; } = false;
        public DateTime? DeathDate { get; set; }
        public string About { get; set; }
        public string ImgUrl { get; set; }
        public ICollection<Confessions> Confessions { get; set; }
    }
}
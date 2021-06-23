using System;
using System.Collections.Generic;

namespace Core.Entities
{
    public class Fathers : BaseEntity
    {
        public Fathers(string name, string priestlyRank, DateTime priestlyDate, bool isDead, DateTime? deathDate, string about, string imgUrl)
        {
            Name = name;
            PriestlyRank = priestlyRank;
            PriestlyDate = priestlyDate;
            IsDead = isDead;
            DeathDate = deathDate;
            About = about;
            ImgUrl = imgUrl;
        }

        public string Name { get; set; }
        public string PriestlyRank { get; set; }
        public DateTime PriestlyDate { get; set; }
        public bool IsDead { get; set; } = false;
        public DateTime? DeathDate { get; set; }
        public string About { get; set; }
        public string ImgUrl { get; set; }


        public virtual IReadOnlyList<Confessions> Confessions { get; set; }
    }
}
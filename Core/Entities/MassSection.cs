using System.Collections.Generic;

namespace Core.Entities
{
    public class MassSection : BaseEntity
    {
        public int? BannerId { get; set; }
        public ImageAssets Banner { get; set; }


        public virtual IReadOnlyList<Mass> Mass { get; set; }
    }
}
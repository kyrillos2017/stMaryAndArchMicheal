using System.Collections.Generic;

namespace API.Dtos
{
    public class MassSectionDto
    {
        public ImageAssetsDto Banner { get; set; }
        public IReadOnlyList<MassDto> Masses { get; set; }
    }
}
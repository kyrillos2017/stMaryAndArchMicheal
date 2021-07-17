using Core.Entities;

namespace Core.Specifications
{
    public class GalleryImagesWithIncludeImages : BaseSpecification<GalleryImages>
    {
        public GalleryImagesWithIncludeImages(BasePaginationsParams paginationsParams) : base(x => (string.IsNullOrEmpty(paginationsParams.Search) || x.Image.Title.ToLower().Contains(paginationsParams.Search)))
        {
            AddInclude(x => x.Image);
            AddOrderBy(x => x.DisplayOrder);
        }
    }
}
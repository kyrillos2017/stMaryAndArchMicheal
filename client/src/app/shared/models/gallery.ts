import { IImageAssets } from "./image-assets";
import { IPagination } from "./response-result";

export interface IGalleryImage {
  id: number
  displayOrder: number
  image: IImageAssets
}

export class IGalleryReturn {
  banner?: IImageAssets;
  images: IPagination<IGalleryImage>
}

export interface ICreateGalleryImage {
  id: number
  imageId: number
  displayOrder: number
}

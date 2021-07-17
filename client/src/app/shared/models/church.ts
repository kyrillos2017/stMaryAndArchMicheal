import { IImageAssets } from './image-assets';
export interface IChurchCreate {
  id?: number
  isActive: boolean
  imageId: number | undefined
  bannerId: number | undefined
  description: string
}

export interface IChurchSection {
  isActive: boolean
  image: IImageAssets
  banner: IImageAssets
  description: string
}



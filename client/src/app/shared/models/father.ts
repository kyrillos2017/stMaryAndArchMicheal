import { IImageAssets } from './image-assets';
import { IPaginationParams } from './pagination';
export interface IConfession {
  id: number
  day: number
  startTime: string
  endTime: string
  place: string
  isActive: boolean
  gender: number
  displayOrder: number
}


export class IFather {
  id: number
  name: string
  priestlyRank: string
  priestlyDate: string
  isDead: boolean
  deathDate: string
  about: string
  image: IImageAssets
  isActive: boolean
  displayOrder: number
  confessions: IConfession[]
}

export class IFatherParams extends IPaginationParams{
  ConfessionId?:number;
}

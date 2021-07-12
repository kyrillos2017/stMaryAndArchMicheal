export interface IBanner {
  id: number;
  title: string;
  imgUrl: string;
}

export interface IMassEvent {
  id: number;
  name: string;
  type: number;
  startTime: Date;
  endTime: Date;
  place: string;
  isActive: boolean;
}
export interface IMass {
  id: number;
  day: number;
  order: number;
  date: Date;
  massEvent: IMassEvent[];
}

export interface IMasses {
  banner: IBanner;
  masses: IMass[];
}

export interface ICraeteMass {
  massId: number;
  massEventId: number;
  secId: number;
  day: number;
  order: number;
  date: Date;
  name: string;
  type: number;
  startTime: Date;
  endTime: Date;
  place: string;
  isActive: boolean;
}

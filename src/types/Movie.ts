import { IImage } from './Image';

export interface IMovie {
  id: string;
  l: string;
  q: string;
  i: IImage;
  qid?: string;
  rank?: number;
  s?: string;
  y?: number;
}

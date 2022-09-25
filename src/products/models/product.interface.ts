import { Image } from './image.interface';
import { Level } from './level.interface';

export interface Product {
  id?: string;
  name: string;
  category: string;
  deadline: string;
  description: string;
  buyers: number;
  levels: Level[];
  details: string;
  origin: string;
  images: Image[];
  produced: boolean;
  craft: boolean;
  recycled: boolean;
  responsible: boolean;
}

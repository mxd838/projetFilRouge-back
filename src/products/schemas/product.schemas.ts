import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  category: string;

  @Prop()
  deadline: string;

  @Prop()
  description: string;

  @Prop()
  buyers: number;

  @Prop()
  levels: [
    {
      level: number;
      buyersNeeded: number;
      price: number;
      current: boolean;
    },
    {
      level: number;
      buyersNeeded: number;
      price: number;
      current: boolean;
    },
    {
      level: number;
      buyersNeeded: number;
      price: number;
      current: boolean;
    },
    {
      level: number;
      buyersNeeded: number;
      price: number;
      current: boolean;
    },
  ];

  @Prop()
  details: string;

  @Prop()
  keywords: string;

  @Prop()
  origin: string;

  @Prop()
  images: [image: string, image: string, image: string];

  @Prop()
  produced: boolean;

  @Prop()
  craft: boolean;

  @Prop()
  recycled: boolean;

  @Prop()
  responsible: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

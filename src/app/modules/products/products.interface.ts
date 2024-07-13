export type TRatings = {
  name: string;
  image: string;
  comment: string;
  rating: number;
}

// Define the Products interface
export type TProducts  = {
  productId: number;
  image: string;
  title: string;
  brand: string;
  quantity: number;
  price: number;
  ratings: TRatings[];
  description: string;
  policy: string;
  status?: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
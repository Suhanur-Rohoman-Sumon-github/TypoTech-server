export type TRatings = {
  name: string;
  image: string;
  comment: string;
  rating: number;
};

export type TProducts = {
  productsId: number;
  image: string;
  title: string;
  brand: string;
  quantity: number;
  price: number;
  ratings: TRatings[];
  descriptions: string;
  policy: string;
};

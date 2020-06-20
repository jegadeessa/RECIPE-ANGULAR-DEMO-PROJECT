export interface RecipeResponse {
  id: number;
  name: string;
  Ingradients: string[];
  recipeImage: string;
}

export interface ShopResponse {
  id: number;
  name: string;
  recipeImage: string;
  quantity?: number;
  price?: number;
}

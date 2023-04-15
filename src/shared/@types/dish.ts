export enum DishType {
  HOT_DISHES = 'Hot Dishes',
  COLD_DISHES = 'Cold Dishes',
  SOUP = 'Soup',
  GRILL = 'Grill',
  APPETIZER = 'Appetizer',
  DESSERT = 'Dessert'
}

export enum IngredientType {
  VEGETABLES = 'vegetables'
}

export interface Ingredient {
  id: number
  name: string
  type: IngredientType
  createdAt?: Date
}

export interface Dish {
  id: string
  name: string
  dishType: DishType
  cookingTime: number
  price: number
  priceDiscount: number
  servings: number
  slug: string
  thumbnail: string
  description: string
  ratingsQuantity: number
  ratingsAverage: number
  ingredients: Array<Omit<Ingredient, 'createdAt'>>
  image: string[]
  createdAt?: Date
  updatedAt?: Date
}

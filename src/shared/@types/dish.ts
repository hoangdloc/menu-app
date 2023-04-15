export enum DishType {
  HOT_DISHES = 'Hot Dishes',
  COLD_DISHES = 'Cold Dishes',
  SOUP = 'Soup',
  GRILL = 'Grill',
  APPETIZER = 'Appetizer',
  DESSERT = 'Dessert'
}

export interface Dish {
  id: string
  name: string
  dishType: DishType
  price: number
  priceDiscount: number
  servings: number
  slug: string
  thumbnail: string
  description: string
  image?: string[]
  createdDate?: Date
  updatedDate?: Date
}

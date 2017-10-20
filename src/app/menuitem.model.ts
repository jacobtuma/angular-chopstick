export class MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  ingredients: any[];

  constructor(name: string, price: number, category: string, ingredients: any[], description?: string) {
    this.id = 0;
    this.name = name;
    this.price = price;
    this.category = category;
    this.ingredients = ingredients;
    this.description = description || '';
  }

}

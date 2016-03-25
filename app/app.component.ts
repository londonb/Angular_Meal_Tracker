import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal List</h1>
    <h3 *For="#meal of meals" (click)=""
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Pizza", 500, "Ate two slices", 0),
      new Meal("Salad", 180, "Went easy on the dressing", 1),
      new Meal("Beer Cheese Soup", 1500, "Had a few beers with it", 2),
      new Meal("Grilled Salmon", 200, "Lightly seasoned")
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    
  }
}

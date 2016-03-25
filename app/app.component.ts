import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
    <h1>Meal List</h1>
    <meal-list
      [mealList]="meals"
      (onMealSelect)="mealWasSelected($event)">
    </meal-list>
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
      new Meal("Grilled Salmon", 200, "Lightly seasoned", 3)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}

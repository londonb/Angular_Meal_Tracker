import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  template:`
  <h3 *ngFor="#currentMeal of mealList" (click)="mealClicked(currentMeal)">
  {{ currentMeal.mealName  }}
  </h3>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  constructor() {
    this.onMealSelect = new EventEmitter()
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.onMealSelect.emit(clickedMeal);

  }
}

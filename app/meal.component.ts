import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template:`
  <h3>{{ meal.mealName }}, Calories: {{meal.calories}}, Details: {{meal.details}}</h3>
  `
})

export class MealComponent {
  public meal: Meal;
}

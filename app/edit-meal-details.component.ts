import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div class="meal-form">
      <h3>Edit Name of Meal: {{ meal.mealName }}</h3>
      <input [(ngModel)]="meal.mealName" class="col-sm-8 input-lg meal-form"/>
      <h3>Edit Calories: {{ meal.calories }}</h3>
      <h3>Edit Details: {{ meal.details }}</h3>
    </div>
  `
})

export class EditMealDetailsComponent {
  public meal: Meal;
}

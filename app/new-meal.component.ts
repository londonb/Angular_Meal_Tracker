import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="meal-form">
      <div class="row">
        <h3>Enter new meal:</h3>
        <input placeholder="Name of meal" class="col-sm-8 input-lg" #newMealName>
        <input placeholder="How many calories?" class="col-sm-8 input-lg" #newCalories>
        <input placeholder="Details about the meal" class="col-sm-8 input-lg" #newMealDetails>
      </div>
      <button class="btn-lg btn-warning add"(click)="addMeal(newMealName, newCalories, newMealDetails)">Add to list</button>

  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userMealName: HTMLInputElement, userCalories: HTMLInputElement, userMealDetails: HTMLInputElement){
    console.log(userMealName.value);
    console.log(userCalories.value);
    this.onSubmitNewMeal.emit([userMealName.value, userCalories.value, userMealDetails.value])
    userMealName.value = "";
    userCalories.value = "";
    userMealDetails.value = "";
  }
}

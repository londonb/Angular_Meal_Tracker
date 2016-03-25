import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent} from './new-meal.component';
import { HealthyPipe} from './healthy.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [HealthyPipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template:`
    <select (change)="onChange($event.target.value)">
      <option value="all">Show all meals</option>
      <option value="healthy">Show my healthy meals</option>
      <option value="notHealthy">Show my poor choices</option>
    </select>
    <meal-display *ngFor="#currentMeal of mealList | healthy:filterHealthy"
      (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
    </meal-display>
    <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
    </edit-meal-details>
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterHealthy: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter()
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal([mealName, calories, details]): void {
    this.mealList.push(
      new Meal(mealName, calories, details, this.mealList.length)
    );
  }
  onChange(filterOption) {
    this.filterHealthy = filterOption;
  }
}

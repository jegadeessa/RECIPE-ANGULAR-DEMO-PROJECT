import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-recipe-details-template-driven',
  templateUrl: './add-recipe-details-template-driven.component.html',
  styleUrls: [
    './add-recipe-details-template-driven.component.scss',
    '../receipe-add-details/receipe-add-details.component.scss',
    '../../../../app.component.scss',
  ],
})
export class AddRecipeDetailsTemplateDrivenComponent implements OnInit {
  addRecipe: any;
  recipe = {
    name: '',
    recipeSource: '',
    recipeImage: '',
    Ingradients: '',
  };

  @Output() addedRecipe: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addHandler() {
    let addedRecipe = {
      id: Math.random() * 1000,
      name: this.recipe.name,
      recipeImage: this.recipe.recipeImage,
      Ingradients: this.recipe.Ingradients.split(','),
    };
    this.addedRecipe.emit(addedRecipe);
  }
}

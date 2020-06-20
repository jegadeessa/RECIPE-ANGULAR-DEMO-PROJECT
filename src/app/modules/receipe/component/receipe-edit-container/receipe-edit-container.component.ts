import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecipeStore } from 'src/app/service/recipe.store';

@Component({
  selector: 'app-receipe-edit-container',
  templateUrl: './receipe-edit-container.component.html',
  styleUrls: [
    './receipe-edit-container.component.scss',
    '../../../../app.component.scss',
    '../receipe-details-container/receipe-details-container.component.scss',
  ],
})
export class ReceipeEditContainerComponent implements OnInit {
  editForm: any;
  recipeIngradients = '';
  @Output() editedRecipe: EventEmitter<any> = new EventEmitter();
  @Input() recipe: any;
  constructor(private store:RecipeStore) {}

  ngOnInit(): void {
    this.setIngradients();
  }

  editedDetails() {
    let editedRecipe = {
      id:this.recipe.id,
      name: this.editForm.value.name,
      Ingradients: this.editForm.value.Ingradients.split(','),
      recipeImage: this.editForm.value.recipeImage,
    };
    this.editedRecipe.emit(editedRecipe);
    this.store.updateRecipeDetails(editedRecipe);
  }

  setIngradients() {
    this.recipe.Ingradients?.map((Ingradient, index) => {
      if (index !== this.recipe.Ingradients.length - 1) {
        this.recipeIngradients += Ingradient + ',';
      } else {
        this.recipeIngradients += Ingradient;
      }
    });
    this.editForm = new FormGroup({
      name: new FormControl(this.recipe.name, Validators.required),
      Ingradients: new FormControl(this.recipeIngradients, Validators.required),
      recipeImage: new FormControl(
        this.recipe.recipeImage,
        Validators.required
      ),
    });
  }
}

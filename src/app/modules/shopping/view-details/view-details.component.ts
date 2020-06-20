import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { RecipeStore } from 'src/app/service/recipe.store';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: [
    './view-details.component.scss',
    '../../receipe/component/receipe-edit-container/receipe-edit-container.component.scss',
    '../../../app.component.scss',
  ],
})
export class ViewDetailsComponent implements OnInit {
  selectedRecipe: any;
  quantityAdded = 0;
  constructor(public store: RecipeStore, private router: Router) {}

  ngOnInit(): void {
    this.store.selectedRecipeData.subscribe((data)=> this.selectedRecipe = data);
  }

  addToCart(selectedRecipe: any) {
    let updatedSelectedRecipe = {
      id:selectedRecipe.id,
      name:selectedRecipe.name,
      recipeImage:selectedRecipe.recipeImage,
      price:selectedRecipe.price,
      quantity:this.quantityAdded
    }
    this.store.addToCart(updatedSelectedRecipe);
    this.router.navigate(['shop']);
  }
}

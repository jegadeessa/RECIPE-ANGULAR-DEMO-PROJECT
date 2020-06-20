import { Component, OnInit, Input } from '@angular/core';
import { RecipeStore } from 'src/app/service/recipe.store';

@Component({
  selector: 'app-receipe-dashboard',
  templateUrl: './receipe-dashboard.component.html',
  styleUrls: [
    './receipe-dashboard.component.scss',
    '../../../../app.component.scss',
  ],
})
export class ReceipeDashboardComponent implements OnInit {
  listView = false;

  constructor(public store: RecipeStore) {}

  ngOnInit(): void {
  }

  viewIconHandler(event: any) {
    this.listView = event;
  }

  addRecipe(recipeData: any) {
    this.store.addRecipe(recipeData);
  }
}


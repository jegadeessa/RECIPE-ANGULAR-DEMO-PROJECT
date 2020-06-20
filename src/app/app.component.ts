import { Component, OnInit } from '@angular/core';
import { RecipeStore } from './service/recipe.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'ReceipeApp';

  constructor(public store: RecipeStore){}
  
  ngOnInit(): void {
    this.store.getRecipeDetails();
  }
}

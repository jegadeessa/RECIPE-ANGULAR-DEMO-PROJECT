import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { RecipeResponse, ShopResponse } from '../shared/modals/modal';

@Injectable({
  providedIn: 'root',
})
export class ReceipeDetailsService {
  selectedRecipe: BehaviorSubject<RecipeResponse> = new BehaviorSubject(null);
  envUrl = 'http://localhost:3000/recipe/';
  constructor(private http: HttpClient) {}

  getReceipeDetails() {
    return this.http.get<RecipeResponse[]>(this.envUrl);
  }

  setRecipeDetails(recipes) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.http.post<RecipeResponse>(this.envUrl, recipes, httpOptions).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  removeRecipeDetails(recipeId) {
    this.http.delete<RecipeResponse>(this.envUrl + recipeId).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  updateRecipeDetails(recipe) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.http
      .put<RecipeResponse>(this.envUrl + recipe.id, recipe, httpOptions)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  setSelectedRecipe(recipe: RecipeResponse) {
    this.selectedRecipe.next(recipe);
  }

  getSelectedRecipe() {
    return this.selectedRecipe as Observable<RecipeResponse>;
  }

  getShoppingDetails() {
    return this.http.get<ShopResponse[]>('http://localhost:3000/shop');
  }
}

import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ReceipeDetailsService } from './receipe-details.service';
import { RecipeResponse, ShopResponse } from '../shared/modals/modal';

@Injectable({
  providedIn: 'root',
})
export class RecipeStore implements OnInit {
  constructor(private recipeService: ReceipeDetailsService) {}

  private recipeList = [];
  private recipeListSubject = new BehaviorSubject<RecipeResponse[]>(null);
  public readonly recipeListData: Observable<
    RecipeResponse[]
  > = this.recipeListSubject.asObservable();

  private shopList = [];
  private shopListSubject = new BehaviorSubject<ShopResponse[]>(null);
  public readonly shopListData: Observable<
    ShopResponse[]
  > = this.shopListSubject.asObservable();

  public selectedRecipe: any;
  private selectedRecipeSubject = new BehaviorSubject<RecipeResponse>(null);
  public readonly selectedRecipeData: Observable<
    RecipeResponse
  > = this.selectedRecipeSubject.asObservable();

  public shopCart = [];
  private shopCartSubject = new BehaviorSubject<ShopResponse[]>(null);
  public readonly shopCartData: Observable<
    ShopResponse[]
  > = this.shopCartSubject.asObservable();

  ngOnInit(): void {}

  getRecipeDetails() {
    this.recipeService.getReceipeDetails().subscribe((recipe) => {
      recipe.map((data) => {
        this.recipeList.push(data);
      });
      this.recipeListSubject.next(this.recipeList);
    });
    this.recipeService.getShoppingDetails().subscribe((recipe) => {
      recipe.map((data) => {
        this.shopList.push(data);
      });
      this.shopListSubject.next(this.shopList);
    });
  }

  addRecipe(recipe: any) {
    this.recipeList.push(recipe);
    this.recipeService.setRecipeDetails(recipe);
    this.recipeListSubject.next(this.recipeList);
  }

  setSelectedRecipe(recipe: any) {
    this.selectedRecipe = recipe;
    this.selectedRecipeSubject.next(recipe);
  }

  updateRecipeDetails(recipe) {
    this.recipeList.map((data, index) => {
      if (data.id === recipe.id) {
        this.recipeList.splice(index, 1, recipe);
        this.recipeService.updateRecipeDetails(recipe);
      }
    });
    this.recipeListSubject.next(this.recipeList);
  }

  removeRecipeDetails(recipe) {
    this.recipeList.map((data, index) => {
      if (data.id === recipe.id) {
        this.recipeList.splice(index, 1);
        this.recipeService.removeRecipeDetails(recipe.id);
      }
    });
    this.recipeListSubject.next(this.recipeList);
  }

  addToCart(recipe) {
    let updatedSelectedRecipe = {};
    let updateStatus = false;
    this.shopCart?.map((data, index) => {
      if (data.id === recipe.id) {
        updatedSelectedRecipe = {
          id: recipe.id,
          name: recipe.name,
          recipeImage: recipe.recipeImage,
          price: recipe.price,
          quantity: data.quantity+recipe.quantity,
        };
        this.shopCart.splice(index, 1, updatedSelectedRecipe);
        updateStatus = true;
      }
    });
    if (!updateStatus) {
      this.shopCart.push(recipe);
    }
    alert('Woohoo!!Your recipe got added in your cart');
    this.shopCartSubject.next(this.shopCart);
  }
}

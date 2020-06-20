import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeStore } from 'src/app/service/recipe.store';

@Component({
  selector: 'app-receipe-details-container',
  templateUrl: './receipe-details-container.component.html',
  styleUrls: ['./receipe-details-container.component.scss'],
})
export class ReceipeDetailsContainerComponent implements OnInit {
  edit = false;
  constructor(
    public store: RecipeStore,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.edit = false;
  }

  onSelect(event?:any){
    if(event === 'edit'){
      this.edit = true;
    }
    else{
      this.store.removeRecipeDetails(this.store.selectedRecipe);
      this.router.navigate(['receipe']);
    }
  }

  updatedDetails(recipe?:any){
    this.store.setSelectedRecipe(recipe);
    this.edit = !this.edit;
  }
}

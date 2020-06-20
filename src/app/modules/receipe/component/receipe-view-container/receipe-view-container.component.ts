import { Component, OnInit, Input } from '@angular/core';
import { recipeData } from 'src/app/modal/receipe.modal';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeStore } from 'src/app/service/recipe.store';

@Component({
  selector: 'app-receipe-view-container',
  templateUrl: './receipe-view-container.component.html',
  styleUrls: ['./receipe-view-container.component.scss'],
})
export class ReceipeViewContainerComponent implements OnInit {
  @Input() listView: boolean;

  constructor(private router:Router,private activatedRoute: ActivatedRoute,public store: RecipeStore) {}

  ngOnInit(): void {
  }

  selectedRecipe(recipeData:recipeData){
    this.store.setSelectedRecipe(recipeData);
    this.router.navigate(['view'],{relativeTo:this.activatedRoute});
  }
}

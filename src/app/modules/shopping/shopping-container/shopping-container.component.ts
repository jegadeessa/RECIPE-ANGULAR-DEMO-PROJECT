import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeStore } from 'src/app/service/recipe.store';

@Component({
  selector: 'app-shopping-container',
  templateUrl: './shopping-container.component.html',
  styleUrls: [
    './shopping-container.component.scss',
    '../../../app.component.scss',
  ],
})
export class ShoppingContainerComponent implements OnInit {
  listView = false;

  constructor(public store:RecipeStore,private router:Router,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
  }

  viewIconHandler(event: any) {
    this.listView = event;
  }

  onSelectRecipe(recipe: any){
    this.store.setSelectedRecipe(recipe);
    this.router.navigate(['viewDetails'],{relativeTo:this.activatedRoute})
  }

  showCart(){
      if(!this.store.shopCart.length){
        alert('Sorry! you have nothing in your cart');
      }
      else{
        this.router.navigate(['cart'],{
          relativeTo:this.activatedRoute
        })
      }
    
  }
}

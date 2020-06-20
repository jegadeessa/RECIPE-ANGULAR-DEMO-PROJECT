import { Component, OnInit } from '@angular/core';
import { RecipeStore } from 'src/app/service/recipe.store';

@Component({
  selector: 'app-shoppingCart',
  templateUrl: './shoppingCart.component.html',
  styleUrls: ['./shoppingCart.component.css', '../../../app.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  constructor(public store: RecipeStore) {}

  ngOnInit() {}
}

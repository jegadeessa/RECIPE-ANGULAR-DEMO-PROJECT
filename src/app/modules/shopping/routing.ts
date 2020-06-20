import { Routes} from '@angular/router';
import { ShoppingContainerComponent } from './shopping-container/shopping-container.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ShoppingCartComponent } from './shoppingCart/shoppingCart.component';


export const Route: Routes = [
  {
    path:'',
    component:ShoppingContainerComponent,
  },
  {
    path:'viewDetails',
    component:ViewDetailsComponent
  },
  {
    path:'cart',
    component:ShoppingCartComponent
  },
  {
      path:'receipe',
      loadChildren: ()=>import('../receipe/receipe.module').then(m => m.ReceipeModule)
  }
  
];
import { Routes} from '@angular/router';


export const Route: Routes = [
  {
    path:'shop',
    loadChildren: ()=>import('../modules/shopping/shopping.module').then(m => m.ShoppingModule)
  },
  {
      path:'receipe',
      loadChildren: ()=>import('../modules/receipe/receipe.module').then(m => m.ReceipeModule)
  }
  
];
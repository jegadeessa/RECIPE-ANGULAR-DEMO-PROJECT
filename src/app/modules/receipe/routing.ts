import { Routes } from '@angular/router';
import { ReceipeDashboardComponent } from './component/receipe-dashboard/receipe-dashboard.component';
import { ReceipeDetailsContainerComponent } from './component/receipe-details-container/receipe-details-container.component';

export const Route: Routes = [
  {
    path:'',
    component:ReceipeDashboardComponent,
  },
  {
    path:'view',
    component:ReceipeDetailsContainerComponent,
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('../shopping/shopping.module').then((m) => m.ShoppingModule),
  },
];

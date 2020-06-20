import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingContainerComponent } from './shopping-container/shopping-container.component';
import { Route } from './routing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ShoppingCartComponent } from './shoppingCart/shoppingCart.component';

@NgModule({
  declarations: [
    ShoppingContainerComponent,
    ViewDetailsComponent,
    ShoppingCartComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(Route), FormsModule]
})
export class ShoppingModule {}

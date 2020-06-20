import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from './routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReceipeDashboardComponent } from './component/receipe-dashboard/receipe-dashboard.component';
import { ReceipeAddDetailsComponent } from './component/receipe-add-details/receipe-add-details.component';
import { ReceipeViewContainerComponent } from './component/receipe-view-container/receipe-view-container.component';
import { ReceipeSelectedDetailsComponent } from './component/receipe-selected-details/receipe-selected-details.component';
import { ReceipeEditContainerComponent } from './component/receipe-edit-container/receipe-edit-container.component';
import { ReceipeDetailsContainerComponent } from './component/receipe-details-container/receipe-details-container.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddRecipeDetailsTemplateDrivenComponent } from './component/add-recipe-details-template-driven/add-recipe-details-template-driven.component';

@NgModule({
  declarations: [
    ReceipeDashboardComponent,
    ReceipeAddDetailsComponent,
    ReceipeViewContainerComponent,
    ReceipeSelectedDetailsComponent,
    ReceipeEditContainerComponent,
    ReceipeDetailsContainerComponent,
    AddRecipeDetailsTemplateDrivenComponent
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, RouterModule.forChild(Route), NgbModule,FormsModule],
})
export class ReceipeModule {}

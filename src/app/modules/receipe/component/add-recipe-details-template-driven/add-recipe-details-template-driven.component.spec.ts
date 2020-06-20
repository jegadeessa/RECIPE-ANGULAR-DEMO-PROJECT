import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeDetailsTemplateDrivenComponent } from './add-recipe-details-template-driven.component';

describe('AddRecipeDetailsTemplateDrivenComponent', () => {
  let component: AddRecipeDetailsTemplateDrivenComponent;
  let fixture: ComponentFixture<AddRecipeDetailsTemplateDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecipeDetailsTemplateDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeDetailsTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

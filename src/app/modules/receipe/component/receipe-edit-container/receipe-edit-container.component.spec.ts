import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeEditContainerComponent } from './receipe-edit-container.component';

describe('ReceipeEditContainerComponent', () => {
  let component: ReceipeEditContainerComponent;
  let fixture: ComponentFixture<ReceipeEditContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipeEditContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipeEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

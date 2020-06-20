import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeDetailsContainerComponent } from './receipe-details-container.component';

describe('ReceipeDetailsContainerComponent', () => {
  let component: ReceipeDetailsContainerComponent;
  let fixture: ComponentFixture<ReceipeDetailsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipeDetailsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipeDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

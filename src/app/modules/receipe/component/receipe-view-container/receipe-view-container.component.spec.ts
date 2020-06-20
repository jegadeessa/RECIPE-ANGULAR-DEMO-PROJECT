import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeViewContainerComponent } from './receipe-view-container.component';

describe('ReceipeViewContainerComponent', () => {
  let component: ReceipeViewContainerComponent;
  let fixture: ComponentFixture<ReceipeViewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipeViewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipeViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

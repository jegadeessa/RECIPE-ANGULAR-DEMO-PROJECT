import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeDashboardComponent } from './receipe-dashboard.component';

describe('ReceipeDashboardComponent', () => {
  let component: ReceipeDashboardComponent;
  let fixture: ComponentFixture<ReceipeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

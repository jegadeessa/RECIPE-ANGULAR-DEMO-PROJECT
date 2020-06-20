import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeSelectedDetailsComponent } from './receipe-selected-details.component';

describe('ReceipeSelectedDetailsComponent', () => {
  let component: ReceipeSelectedDetailsComponent;
  let fixture: ComponentFixture<ReceipeSelectedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipeSelectedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipeSelectedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

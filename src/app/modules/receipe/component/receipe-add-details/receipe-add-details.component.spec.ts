import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeAddDetailsComponent } from './receipe-add-details.component';

describe('ReceipeAddDetailsComponent', () => {
  let component: ReceipeAddDetailsComponent;
  let fixture: ComponentFixture<ReceipeAddDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipeAddDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipeAddDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

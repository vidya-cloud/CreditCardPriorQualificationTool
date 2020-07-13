import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibleCardTypesComponent } from './eligible-card-types.component';

describe('EligibleCardTypesComponent', () => {
  let component: EligibleCardTypesComponent;
  let fixture: ComponentFixture<EligibleCardTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligibleCardTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibleCardTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

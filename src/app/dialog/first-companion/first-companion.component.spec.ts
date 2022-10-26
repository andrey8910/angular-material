import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCompanionComponent } from './first-companion.component';

describe('FirstCompanionComponent', () => {
  let component: FirstCompanionComponent;
  let fixture: ComponentFixture<FirstCompanionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCompanionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstCompanionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

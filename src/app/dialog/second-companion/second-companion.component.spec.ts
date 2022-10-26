import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCompanionComponent } from './second-companion.component';

describe('SecondCompanionComponent', () => {
  let component: SecondCompanionComponent;
  let fixture: ComponentFixture<SecondCompanionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondCompanionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondCompanionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

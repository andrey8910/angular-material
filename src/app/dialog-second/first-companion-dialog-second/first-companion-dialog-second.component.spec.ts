import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCompanionDialogSecondComponent } from './first-companion-dialog-second.component';

describe('FirstCompanionDialogSecondComponent', () => {
  let component: FirstCompanionDialogSecondComponent;
  let fixture: ComponentFixture<FirstCompanionDialogSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCompanionDialogSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstCompanionDialogSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

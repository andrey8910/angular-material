import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCompanionDialogSecondComponent } from './second-companion-dialog-second.component';

describe('SecondCompanionDialogSecondComponent', () => {
  let component: SecondCompanionDialogSecondComponent;
  let fixture: ComponentFixture<SecondCompanionDialogSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondCompanionDialogSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondCompanionDialogSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

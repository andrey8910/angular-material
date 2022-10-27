import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import { FirstCompanionComponent } from './dialog/first-companion/first-companion.component';
import { SecondCompanionComponent } from './dialog/second-companion/second-companion.component';
import { FirstCompanionDialogSecondComponent } from './dialog-second/first-companion-dialog-second/first-companion-dialog-second.component';
import { SecondCompanionDialogSecondComponent } from './dialog-second/second-companion-dialog-second/second-companion-dialog-second.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompanionComponent,
    SecondCompanionComponent,
    FirstCompanionDialogSecondComponent,
    SecondCompanionDialogSecondComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

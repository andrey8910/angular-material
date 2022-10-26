import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatBadgeModule} from '@angular/material/badge';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatBadgeModule,
    MatTabsModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    DragDropModule,
    CdkAccordionModule,
    MatDialogModule

  ],
  exports: [
    MatButtonModule,
    MatBadgeModule,
    MatTabsModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    DragDropModule,
    CdkAccordionModule,
    MatDialogModule
  ]
})
export class MaterialModule { }

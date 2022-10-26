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
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    DragDropModule

  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    DragDropModule
  ]
})
export class MaterialModule { }

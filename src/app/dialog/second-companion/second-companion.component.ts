
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  answer: string;
  name: string;
}

@Component({
  selector: 'app-second-companion',
  templateUrl: './second-companion.component.html',
  styleUrls: ['./second-companion.component.css']
})
export class SecondCompanionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SecondCompanionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

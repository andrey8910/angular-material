import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogSecondData {
  answerText: string;
  answerColor: string;

}
@Component({
  selector: 'app-second-companion-dialog-second',
  templateUrl: './second-companion-dialog-second.component.html',
  styleUrls: ['./second-companion-dialog-second.component.css']
})
export class SecondCompanionDialogSecondComponent implements OnInit {
  colors: string[] = ['red', 'blue', 'black', 'green']
  constructor(
    public dialogRef: MatDialogRef<SecondCompanionDialogSecondComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogSecondData,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}

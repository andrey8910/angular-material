import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SecondCompanionComponent } from '../second-companion/second-companion.component'
import {
  DialogSecondData,
  SecondCompanionDialogSecondComponent
} from "../../dialog-second/second-companion-dialog-second/second-companion-dialog-second.component";

@Component({
  selector: 'app-first-companion',
  templateUrl: './first-companion.component.html',
  styleUrls: ['./first-companion.component.css']
})
export class FirstCompanionComponent implements OnInit {
  dialogFirstName: string = '';
  answerCompanionDialogFirst: string = '';

  answerCompanionDialogSecond: DialogSecondData = {
    answerText : '',
    answerColor : ''
  };

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openDialogFirst(){
    const dialogRef = this.dialog.open(SecondCompanionComponent, {
      width: '250px',
      data: {name: this.dialogFirstName, answer: this.answerCompanionDialogFirst},
      disableClose: true,
      panelClass: 'modal-dialog'

    });

    dialogRef.afterClosed().subscribe(result => {
      this.answerCompanionDialogFirst = result;
      console.log(result)
    });
  }

  public openDialogSecond(){
    const dialogRef = this.dialog.open(SecondCompanionDialogSecondComponent, {
      width: '250px',
      data: {answerText : this.answerCompanionDialogSecond.answerText, answerColor: this.answerCompanionDialogSecond.answerColor},
      disableClose: true,
      panelClass: 'modal-dialog-second'

    });

    dialogRef.afterClosed().subscribe(result => {
      this.answerCompanionDialogSecond = result;
      console.log(result)
    });
  }

}

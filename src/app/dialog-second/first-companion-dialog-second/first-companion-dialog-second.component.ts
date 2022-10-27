import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {
  DialogSecondData,
  SecondCompanionDialogSecondComponent
} from '../second-companion-dialog-second/second-companion-dialog-second.component';


@Component({
  selector: 'app-first-companion-dialog-second',
  templateUrl: './first-companion-dialog-second.component.html',
  styleUrls: ['./first-companion-dialog-second.component.css']
})
export class FirstCompanionDialogSecondComponent implements OnInit {
  answerCompanion: DialogSecondData = {
    answerText : '',
    answerColor : ''
  };
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openDialog(){
    const dialogRef = this.dialog.open(SecondCompanionDialogSecondComponent, {
      width: '250px',
      data: {answerText : this.answerCompanion.answerText, answerColor: this.answerCompanion.answerColor},
      disableClose: true,
      panelClass: 'modal-dialog-second'

    });

    dialogRef.afterClosed().subscribe(result => {
      this.answerCompanion = result;
      console.log(result)
    });
  }


}

import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SecondCompanionComponent } from '../second-companion/second-companion.component'

@Component({
  selector: 'app-first-companion',
  templateUrl: './first-companion.component.html',
  styleUrls: ['./first-companion.component.css']
})
export class FirstCompanionComponent implements OnInit {
  name: string = '';
  answerCompanion: string = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    const dialogRef = this.dialog.open(SecondCompanionComponent, {
      width: '250px',
      data: {name: this.name, answer: this.answerCompanion},
      disableClose: true,
      panelClass: 'modal-dialog'

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.answerCompanion = result;
    });
  }

}

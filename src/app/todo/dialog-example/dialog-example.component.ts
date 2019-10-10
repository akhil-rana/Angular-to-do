import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})

export class DialogOverviewExampleDialog {

  constructor(public dialogRef: MatDialogRef < DialogOverviewExampleDialog > ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

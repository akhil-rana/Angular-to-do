import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-already-exists-dialog',
  templateUrl: './already-exists-dialog.component.html',
  styleUrls: ['./already-exists-dialog.component.css']
})
export class AlreadyExistsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AlreadyExistsDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit() {
  }

}

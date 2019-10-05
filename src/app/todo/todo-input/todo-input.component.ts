import { Component, OnInit } from '@angular/core';
import { DataService} from '../../data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogOverviewExampleDialog} from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  constructor(private ds:DataService,public dialog: MatDialog ) { }
  listItem
  ngOnInit() {
  }
  add(){
    if((<HTMLInputElement>document.getElementById("inputl")).value==""){
      this.opendialog();
    }
    else
    {
        this.ds.toDoList.push(this.listItem);
        this.listItem = null;
    }
  }
  opendialog(): void{
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      height: '230px',
      width: '300px'    
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  }



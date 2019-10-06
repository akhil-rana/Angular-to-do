import { Component, OnInit } from '@angular/core';
import { DataService} from '../../data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogOverviewExampleDialog} from '../dialog-example/dialog-example.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  constructor(private ds:DataService,public dialog: MatDialog,private _snackBar: MatSnackBar ) {
    setInterval(function()
    { 
      if(ds.colorflag==1){
        (<HTMLInputElement>document.getElementById("add")).style.background="rgb(35, 35, 35)";
      }
      else
     (<HTMLInputElement>document.getElementById("add")).style.background="rgb(26, 58, 85)";
    }, 200);
   }
  listItem
  ngOnInit() {
  }
  add(message){
    if((<HTMLInputElement>document.getElementById("inputl")).value==""){
      this.opendialog();
    }
    else
    {
        this.ds.toDoList.push(this.listItem);
        this.listItem = null;
        let snackBarRef=this._snackBar.open("'"+message+"'"+" inserted", "Undo", {
          duration: 2000,
        });
        snackBarRef.onAction().subscribe(() => {
          this.ds.toDoList.pop();
        });
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



import { Injectable } from '@angular/core';
import {MatSnackBar,MatSnackBarConfig} from '@angular/material/snack-bar';
import {MatDialogConfig} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}

  toDoList = []
  doneList = []
  colorflag = 0

  config = new MatSnackBarConfig();
  config1 = new MatSnackBarConfig();

  dconfig = new MatDialogConfig();
  dconfig1 = new MatDialogConfig();

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoHeaderComponent implements OnInit {

  constructor(private ds:DataService) {
    setInterval(function()
    {
      if(ds.colorflag==1){
        (<HTMLInputElement>document.getElementById("topnav")).style.background="rgb(55, 55, 55)";
        (<HTMLInputElement>document.getElementsByClassName("mat-button-toggle")[0]).style.background="rgb(35, 35, 35)";
        (<HTMLInputElement>document.getElementsByClassName("mat-button-toggle-checked")[0]).style.background="rgb(55, 55, 55)";

      }
      else{
        (<HTMLInputElement>document.getElementById("topnav")).style.background="rgb(26, 58, 85)";
        (<HTMLInputElement>document.getElementsByClassName("mat-button-toggle-checked")[0]).style.background="rgb(163, 163, 163)";
         (<HTMLInputElement>document.getElementsByClassName("mat-button-toggle")[1]).style.background="rgb(135, 135, 135)";
      }
    }, 200);
   }


  ngOnInit() {

  }
  dark(){
    (<HTMLInputElement>document.getElementById("body")).style.background="rgb(31, 31, 31)";
    this.ds.colorflag=1;


  }

  light(){
    (<HTMLInputElement>document.getElementById("body")).style.background="rgb(122, 172, 177)";
    this.ds.colorflag=0;

  }

}

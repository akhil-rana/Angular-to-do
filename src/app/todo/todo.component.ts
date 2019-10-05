import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private ds:DataService) { 
    setInterval(function()
    { 
      if(ds.colorflag==1){
        (<HTMLInputElement>document.getElementById("tcard")).style.background="rgb(55, 55, 55)";
      }
      else
     (<HTMLInputElement>document.getElementById("tcard")).style.background="rgb(133, 155, 152)";
    }, 200);
   
  }

  ngOnInit() {
  }

}

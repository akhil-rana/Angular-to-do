import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  dark(){
    (<HTMLInputElement>document.getElementById("body")).style.background="rgb(31, 31, 31)";
  }
  
  light(){
    (<HTMLInputElement>document.getElementById("body")).style.background="rgb(122, 172, 177)";
  }
  
}

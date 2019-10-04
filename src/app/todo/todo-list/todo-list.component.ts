import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  i
  constructor(private ds:DataService) { }

  ngOnInit() {
    this.list=this.ds.toDoList;
  }
  list
  delete(i){
    this.list.splice(i,1);
  }
}

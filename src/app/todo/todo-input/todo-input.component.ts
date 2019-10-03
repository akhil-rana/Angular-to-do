import { Component, OnInit } from '@angular/core';
import { DataService} from '../../data.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  constructor(private ds:DataService ) { }

  listItem
  ngOnInit() {
  }
  add(){
    this.ds.toDoList.push(this.listItem);
  }

}

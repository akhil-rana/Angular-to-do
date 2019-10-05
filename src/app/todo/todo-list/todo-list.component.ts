import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  i
  
  constructor(private ds:DataService) {
    
   }

  ngOnInit() {
    this.list=this.ds.toDoList;
    this.list1=this.ds.doneList;
  }
  list
  list1


  delete(i){
   this.list.splice(i,1);
  }
  delete1(i){
    this.list1.splice(i,1);
  }
  checked(i){
    this.list1.push(this.list.splice(i,1));
  }
  unchecked(i){
    this.list.push(this.list1.splice(i,1));
  }


  showr(i){
    if(i==this.list.length-1)
      return false;
    else
      return true;
  }
  flag(){
    if(this.ds.toDoList.length!=0&&this.ds.doneList.length!=0)
      return true;
    else
      return false;   
  }

  flag1(){
    if(this.ds.toDoList.length!=0)
      return true;
    else
      return false;   
  }

  flag2(){
    if(this.ds.doneList.length!=0)
      return true;
    else
      return false;   
  }

  flag3(){
    if(this.ds.toDoList.length==0&&this.ds.doneList.length==0)
      return true;
    else
      return false;   
  }


}

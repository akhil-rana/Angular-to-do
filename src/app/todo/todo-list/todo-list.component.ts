import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],


  animations: [
    trigger('fadeIn', [state('void', style({
      opacity: 0
    })),
    transition('void => *', animate(700)),
    ]),
  ]

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
  showr1(i){
    if(i==this.list1.length-1)
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



  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }


}

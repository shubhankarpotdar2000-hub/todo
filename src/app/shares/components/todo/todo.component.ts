import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { todoData } from '../../consts/todo';
import { Itodo } from '../../models/todo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @ViewChild('todoItem')todoItem !: ElementRef;

    editId !:string;
  isInEditMode: boolean = false;

  trackById(index:number, todo:Itodo){
    return todo.todoId
  }
  constructor(
    private _snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  todosArr = todoData;

  onTodoAdd(){
    let todoObj:Itodo = {
      todoItem: this.todoItem.nativeElement.value,
      todoId : Date.now().toString()
      
    }

    this.todoItem.nativeElement.value=""

    this.todosArr.push(todoObj)
    this._snackBar.open(`the todo Item with id${todoObj.todoId} is created successfully`, 'close',{
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }

  onEdit(todo:Itodo){
    this.todoItem.nativeElement.value = todo.todoItem
    this.editId = todo.todoId
    this.isInEditMode = true;
   
  }

  RemoveTodo(id:string){
    let getIndex = this.todosArr.findIndex(t => t.todoId === id)
    this.todosArr.splice(getIndex,1)
    this._snackBar.open(`the todo Item with id ${id} is removed successfully`,'close',{
      horizontalPosition: "left",
      verticalPosition: 'top',
      duration: 3000
    })
  }

  onUpdate():void{
    let UPDATE_TODO : Itodo ={
      todoItem:this.todoItem.nativeElement.value,
      todoId: this.editId
    }

    this.todoItem.nativeElement.value=''

    let getIndex = this.todosArr.findIndex(t =>t.todoId === UPDATE_TODO.todoId)
    this.todosArr[getIndex] = UPDATE_TODO
    this.isInEditMode = false

     this._snackBar.open(`the todoItem with id ${UPDATE_TODO.todoId} is updated successfully`,'close',{
      horizontalPosition:'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}

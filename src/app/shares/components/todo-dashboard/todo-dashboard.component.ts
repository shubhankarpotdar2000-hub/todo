import { Component, OnInit } from '@angular/core';
import { todoData } from '../../consts/todo';
import { Itodo } from '../../models/todo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
  EditId !: Itodo
  constructor(
    private _snackbar : MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  todoArr : Array<Itodo> = todoData;


  getaddtodos(add: Itodo){
    this.todoArr.unshift(add)
    this._snackbar.open(`the todoItem with id${add.todoId} is added successfully`,'close',{
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }

  getremovetodo(t: Itodo){
    let getIndex = this.todoArr.findIndex(l=>l.todoId == t.todoId)
    this.todoArr.splice(getIndex, 1)
    this._snackbar.open(`The todoitem with id ${t.todoId} is removed successfully`,'close',{
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }

  geteditId(edit: Itodo){
    this.EditId = edit
  }

  getupdatetodo(update: Itodo){
    let UPid = this.todoArr.findIndex(u=>u.todoId === update.todoId)
    this.todoArr[UPid] = update
    this._snackbar.open(`the todoitem with id ${update.todoId} is updated successfully`,'close',{
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
 @Input()toedoInfo!: Array<Itodo>
 @Output()emitremovetodo: EventEmitter<Itodo> = new EventEmitter<Itodo>();
 @Output()emiteditId: EventEmitter<Itodo> = new EventEmitter<Itodo>();
  constructor() { }

  ngOnInit(): void {
  }

  onremove(remove: Itodo){
    this.emitremovetodo.emit(remove)
  }

  onedit(edit: Itodo){
    this.emiteditId.emit(edit)
  }


}

import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit,OnChanges {
  @ViewChild('todotestform')todotestform !: NgForm
  @Output()emitaddtodos: EventEmitter<Itodo> = new EventEmitter<Itodo>();
  @Input() EditInfo !: Itodo
  @Output()emitupdateId : EventEmitter<Itodo> = new EventEmitter<Itodo>();

  isInEdit : boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['EditInfo']['currentValue']){
      this.isInEdit=true
      this.todotestform.form.patchValue(changes['EditInfo']['currentValue'])
    }
  }

  ontodoAdd(){
    if(this.todotestform.valid){
      let addobj : Itodo={
        ...this.todotestform.value,
        todoId: Date.now().toString()
      }
      this.emitaddtodos.emit(addobj);
      this.todotestform.reset();
    }
  }

  onupdate(){
    if(this.todotestform.valid){
      let updateobj: Itodo ={
        ...this.todotestform.value,
        todoId: this.EditInfo.todoId
      }
      this.todotestform.reset()
      this.isInEdit=false
      this.emitupdateId.emit(updateobj)
    }
  }

}

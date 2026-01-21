import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from '../../models/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit,OnChanges {
  @ViewChild('studenttestform')studenttestform !: NgForm
  @Output()emitaddstd: EventEmitter<Istd> = new EventEmitter<Istd>();
  @Input()editinfo !: Istd
  @Output()emitupdatestd : EventEmitter<Istd> = new EventEmitter<Istd>()

  isinEditmode:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['editinfo']['currentValue']){
      this.isinEditmode = true
      this.studenttestform.form.patchValue(changes['editinfo']['currentValue'])

    }
  }

  onaddstd(){
    if(this.studenttestform.valid){
      let addobj: Istd ={
        ...this.studenttestform.value,
        stdId: Date.now().toString()
      }
      this.emitaddstd.emit(addobj)
      this.studenttestform.reset()
    }
  }

  updatestd(){
    if(this.studenttestform.valid){
      let updateobj: Istd ={
      ...this.studenttestform.value,
      stdId: this.editinfo.stdId
    }
    this.isinEditmode=false
    this.studenttestform.reset()
    this.emitupdatestd.emit(updateobj)
    }
  }

}

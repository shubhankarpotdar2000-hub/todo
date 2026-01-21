import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from '../../models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
 @Input()stdInfo !: Array<Istd>
 @Output()emitremoveid : EventEmitter<Istd> = new EventEmitter<Istd>()
 @Output()emiteditId: EventEmitter<Istd> = new EventEmitter<Istd>()
  constructor() { }

  ngOnInit(): void {
  }

  onremove(rem: Istd){
    this.emitremoveid.emit(rem)
  }

  onEdit(edit:Istd){
    this.emiteditId.emit(edit)
  }

}

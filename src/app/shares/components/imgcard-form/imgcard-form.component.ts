import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Img } from '../../models/imgcard';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-imgcard-form',
  templateUrl: './imgcard-form.component.html',
  styleUrls: ['./imgcard-form.component.scss']
})
export class ImgcardFormComponent implements OnInit , OnChanges{
@ViewChild('imgForm')imgForm !: NgForm
  isInEditMode:boolean =false
@Output() emitaddimg: EventEmitter<Img> = new EventEmitter<Img>()
@Input()IDedit !: Img
@Output() emitupdate: EventEmitter<Img> = new EventEmitter<Img>()
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['IDedit']['currentValue']){
      this.isInEditMode=true
      this.imgForm.form.patchValue(changes['IDedit']['currentValue'])
    }
  }

  onadd(){
    if(this.imgForm.valid){
      let addobj:Img ={
        ...this.imgForm.value,
        id: Date.now().toString()
      }
      this.emitaddimg.emit(addobj)
    }
  }
  onupdate(){
    if(this.imgForm.valid){
      let updateobj : Img ={
        ...this.imgForm.value,
        id: this.IDedit.id

      }
      this.emitupdate.emit(updateobj)
     
      this.imgForm.reset()

       this.isInEditMode= false
    }
  }

}

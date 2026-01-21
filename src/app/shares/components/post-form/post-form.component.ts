import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ipost } from '../../models/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit,OnChanges {
@ViewChild('postForm')postForm !: NgForm
@Output() emitaddpost : EventEmitter<Ipost> = new EventEmitter<Ipost>()
@Input() EditInfo !: Ipost
@Output() emitupdatecard: EventEmitter<Ipost> = new EventEmitter<Ipost>()

isInEditMode : boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['EditInfo']['currentValue']){
      this.isInEditMode=true
      this.postForm.form.patchValue(changes['EditInfo']['currentValue'])
    }
  }

  onaddpost(){
    if(this.postForm.valid){
      let addobj: Ipost={
        ...this.postForm.value,
        id: Date.now().toString()
      }
      this.emitaddpost.emit(addobj)
      this.postForm.reset()
    }
  }

  updatecard(){
   if(this.postForm.valid){
     let updatedobj: Ipost ={
      ...this.postForm.value,
      id: this.EditInfo.id
    }
    
    this.emitupdatecard.emit(updatedobj)
    this.postForm.reset()
    this.isInEditMode = false
   }
  }

}

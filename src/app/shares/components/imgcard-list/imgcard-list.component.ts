import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Img } from '../../models/imgcard';

@Component({
  selector: 'app-imgcard-list',
  templateUrl: './imgcard-list.component.html',
  styleUrls: ['./imgcard-list.component.scss']
})
export class ImgcardListComponent implements OnInit {
@Input()imgInfo !: Array<Img>
@Output()emitremoveid: EventEmitter<Img> = new EventEmitter<Img>()
@Output()emiteditid: EventEmitter<Img> = new EventEmitter<Img>()
  constructor() { }

  ngOnInit(): void {
  }

  onremove(remo: Img){
this.emitremoveid.emit(remo)
  }

  onedit(edit: Img){
    this.emiteditid.emit(edit)
    
  }

}

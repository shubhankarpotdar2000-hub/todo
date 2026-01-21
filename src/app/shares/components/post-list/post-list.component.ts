import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipost } from '../../models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
@Input() postInfo !: Array<Ipost>
@Output() emitremovecard: EventEmitter<Ipost> = new EventEmitter<Ipost>()
@Output()emiteditId: EventEmitter<Ipost> = new EventEmitter<Ipost>()
  constructor() { }

  ngOnInit(): void {
  }

  ondelete(remo: Ipost){
    this.emitremovecard.emit(remo)
  }

  onedit(edit: Ipost){
    this.emiteditId.emit(edit)
  }

}

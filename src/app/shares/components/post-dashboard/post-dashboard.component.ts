import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../models/post';
import { postsArr } from '../../consts/post';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
  Editid !: Ipost
  constructor(
    private _snackbar : MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  postdata : Array<Ipost> = postsArr

  getaddpost(add : Ipost){
    this.postdata.unshift(add)
    this._snackbar.open(`the postcard with id ${add.id} is added successfully`,'close',{
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }

  getremovepost(cut : Ipost){
    let getIndex = this.postdata.findIndex(t => t.id == cut.id)
    this.postdata.splice(getIndex, 1)
    this._snackbar.open(`The postcard with id ${cut.id} is removed successfuly`,'close',{
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }

  getemitid(editid: Ipost){
    this.Editid = editid
  }

  getUpdatgeid(up: Ipost){
    let updateid = this.postdata.findIndex(p => p.id === up.id)
    this.postdata[updateid] = up
    this._snackbar.open(`the postcard with id ${up.id} is updated successsfully`,'close',{
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}

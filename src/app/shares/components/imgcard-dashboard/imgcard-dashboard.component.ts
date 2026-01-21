import { Component, OnInit } from '@angular/core';
import { Img } from '../../models/imgcard';
import { imgdataj } from '../../consts/imgcard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-imgcard-dashboard',
  templateUrl: './imgcard-dashboard.component.html',
  styleUrls: ['./imgcard-dashboard.component.scss']
})
export class ImgcardDashboardComponent implements OnInit {
  EditidInfo !: Img
  constructor(
    private _snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  imgArr : Array<Img> = imgdataj;

  getaddimg(add: Img){
    this.imgArr.unshift(add)
    this._snackbar.open(`the imgcard with id ${add.id} is added successfully`,'close',{
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }

  getremovecard(cut:Img){
    let getIndex = this.imgArr.findIndex(t =>t.id)
    this.imgArr.splice(getIndex, 1)
    this._snackbar.open(`the card with id ${cut.id} is removed successfully`,'close',{
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }

  geteditid(id: Img){
    this.EditidInfo = id
  }

  getUpdateimg(update: Img){
    let up = this.imgArr.findIndex(t =>t.id === update.id)
    this.imgArr[up]=update
    this._snackbar.open(`the card with id ${update.id} is updated successfully`,'close',{
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}

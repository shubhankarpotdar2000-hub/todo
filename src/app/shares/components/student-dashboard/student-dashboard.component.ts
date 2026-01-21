import { Component, OnInit } from '@angular/core';
import { Istd } from '../../models/student';
import { stdData } from '../../consts/student';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  EditID !: Istd
  constructor(
    private _snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  stdArr : Array<Istd> = stdData

  getaddstd(add: Istd){
    this.stdArr.unshift(add)
    this._snackbar.open(`the student with id ${add.stdId} is added successfully`,'close',{
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }

  getremovestd(remove: Istd){
    let getIndex = this.stdArr.findIndex(t =>t.stdId == remove.stdId)
    this.stdArr.splice(getIndex, 1)
    this._snackbar.open(`the student with id ${remove.stdId} is removed successfuly`,'close',{
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }

  geteditid(ed: Istd){
    this.EditID = ed;
  }

  getupdatestd(update : Istd){
    let updatestd = this.stdArr.findIndex(t => t.stdId === update.stdId)

    this.stdArr[updatestd] = update;
    this._snackbar.open(`the student with id ${update.stdId} is updated successfully`,'close',{
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration : 4000
    })
  }

}

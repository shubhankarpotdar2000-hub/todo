import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { stdData } from '../../consts/student';
import { Istd } from '../../models/student';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {


  isInEdit:boolean= false;
  editid!:string
  constructor(
    private _matDialog:MatDialog
  ) { }

  @ViewChild('fname')fname !:ElementRef
  @ViewChild('lname')lname !:ElementRef
  @ViewChild('email')email !:ElementRef
  @ViewChild('contact')contact !:ElementRef
  @ViewChild('stdId')stdId !:ElementRef

  ngOnInit(): void {
  }

stdArr = stdData;

onStdAdd():void{
  let std_obj : Istd ={
    fname: this.fname.nativeElement.value,
     lname: this.lname.nativeElement.value,
     email: this.email.nativeElement.value,
     contact: this.contact.nativeElement.value,
     stdId: Date.now().toString()
     
  }

  this.fname.nativeElement.value= ''
  this.lname.nativeElement.value= ''
  this.email.nativeElement.value= ''
  this.contact.nativeElement.value= ''
  

  this.stdArr.push(std_obj)
  console.log(std_obj)
}

onEdit(std:Istd):void{
  this.fname.nativeElement.value = std.fname;
  this.lname.nativeElement.value = std.lname;
  this.email.nativeElement.value = std.email;
  this.contact.nativeElement.value = std.contact;
  this.editid = std.stdId
  this.isInEdit= true;

  
}

onUpdate():void
{
  let obj =
  {
    fname : this.fname.nativeElement.value,
    lname : this.lname.nativeElement.value ,
    email : this.email.nativeElement.value ,
    contact : this.contact.nativeElement.value ,
     stdId : this.editid
  }
  
  let getIndex = this.stdArr.findIndex(add=>add.stdId===this.editid)
  this.stdArr[getIndex] = obj
   this.fname.nativeElement.value = ''
   this.lname.nativeElement.value = ''
   this.email.nativeElement.value = ''
   this.contact.nativeElement.value = ''

}

onRemove(id:string):void{
  // let deletObj = this.stdArr.findIndex(add=>add.stdId===this.editid)
  // this.stdArr.splice(deletObj , 1) 

  let matconfig = new MatDialogConfig()
  matconfig.disableClose = false
  matconfig.width= "450px"

  let MatDialogRef = this._matDialog.open(GetconfirmComponent,matconfig)
  MatDialogRef.afterClosed()
  .subscribe(res=>{
   if(res){
     let getIndex = this.stdArr.findIndex(t=>t.stdId === id)
    let std = this.stdArr.splice(getIndex,1)
   }
  })
}
}

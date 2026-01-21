import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoComponent } from './shares/components/todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { StudentComponent } from './shares/components/student/student.component';
import { GetconfirmComponent } from './shares/components/getconfirm/getconfirm.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TodoDashboardComponent } from './shares/components/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './shares/components/todo-form/todo-form.component';
import { TodoListComponent } from './shares/components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { StudentDashboardComponent } from './shares/components/student-dashboard/student-dashboard.component';
import { StudentFormComponent } from './shares/components/student-form/student-form.component';
import { StudentListComponent } from './shares/components/student-list/student-list.component';
import { PostDashboardComponent } from './shares/components/post-dashboard/post-dashboard.component';
import { PostFormComponent } from './shares/components/post-form/post-form.component';
import { PostListComponent } from './shares/components/post-list/post-list.component';
import { ImgcardDashboardComponent } from './shares/components/imgcard-dashboard/imgcard-dashboard.component';
import { ImgcardFormComponent } from './shares/components/imgcard-form/imgcard-form.component';
import { ImgcardListComponent } from './shares/components/imgcard-list/imgcard-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    StudentComponent,
    GetconfirmComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    StudentDashboardComponent,
    StudentFormComponent,
    StudentListComponent,
    PostDashboardComponent,
    PostFormComponent,
    PostListComponent,
    ImgcardDashboardComponent,
    ImgcardFormComponent,
    ImgcardListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

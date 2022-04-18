import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { UserComponent } from './user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    AddUserComponent,
    ShowUserComponent,
    UserComponent,
    ListUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    UserRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class UserModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { UserComponent } from './user.component';


const routes: Routes = [
  {
    path:'user',component:UserComponent,
    children:[
      {path:'add',component:AddUserComponent},
      {path:'list',component:ListUserComponent},
      {path:'list/:id',component:ShowUserComponent},
      {path:'update/:id',component:EditUserComponent}
    ]
  }
];

@NgModule({
  declarations: [ ],
  imports: [

    RouterModule.forChild(routes)
  ]
})
export class UserRoutingModule { }

import { NgModule } from '@angular/core';
import { AddMaterialComponent } from './add-material/add-material.component';
import { ShowMaterialComponent } from './show-material/show-material.component';
import { MaterialComponent } from './material.component';
import { RouterModule, Routes } from '@angular/router';
import { ListMaterialComponent } from './list-material/list-material.component';




const routes: Routes = [
  {
    path:'',component:MaterialComponent,
    children:[
      {path:'material/add',component:AddMaterialComponent},
      {path:'list',component:ListMaterialComponent},
      // {path:'show',component:ShowMaterialComponent},
      {path:'list/:id',component:ShowMaterialComponent},

    ]
  }
];

@NgModule({
  declarations: [ ],
  imports: [

    RouterModule.forChild(routes)
  ]
})
export class MaterialRoutingModule { }

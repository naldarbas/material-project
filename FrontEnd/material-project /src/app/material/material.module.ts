import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AddMaterialComponent } from './add-material/add-material.component';
import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';
import { ShowMaterialComponent } from './show-material/show-material.component';
import { ListMaterialComponent } from './list-material/list-material.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AddMaterialComponent,
      ShowMaterialComponent,
      MaterialComponent,
      ListMaterialComponent
      

  ],

  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    MaterialRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
    
  ]
})
export class MaterialModule { }

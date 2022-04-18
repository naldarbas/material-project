import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Material } from 'src/app/material';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css']
})
export class AddMaterialComponent implements OnInit {

  Materials: Material[];

  constructor(private materialervice: MaterialService){}
  
  ngOnInit(): void {


  }
  public onAddMaterial(addForm: NgForm): void {
     this.materialervice.addMaterial(addForm.value).subscribe(
       (response: Material) => {
         console.log(response);
         addForm.reset(); //to clear the form from last added
       },
       (error: HttpErrorResponse) => {
         console.log(error.message);
         addForm.reset();
       }
     );
   }
  
   
}

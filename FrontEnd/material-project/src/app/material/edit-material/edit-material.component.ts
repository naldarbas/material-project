import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Material } from 'src/app/material';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-edit-material',
  templateUrl: './edit-material.component.html',
  styleUrls: ['./edit-material.component.css']
})
export class EditMaterialComponent implements OnInit {

  update?: Material;
 
  
  constructor(private activeRoute:ActivatedRoute,
    private materialService: MaterialService,private router: Router) { }

  ngOnInit(): void {
    //to get previous data of Materal
    console.log('inside OnInit Edit');
    const id  = this.activeRoute.snapshot.params['id'];
    this.materialService.FetchDataById(id).subscribe(res => {
      this.update = res;
      })
  }


  public onUpdateMaterial(material: Material): void {
    this.materialService.updateMaterial(material).subscribe(
      (response: Material) => {
        console.log(response);
        console.log("inside onUpdateMaterial");
        this.materialService.getMaterials();
        this.router.navigateByUrl('list');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  

}

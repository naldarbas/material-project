import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/material';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-list-material',
  templateUrl: './list-material.component.html',
  styleUrls: ['./list-material.component.css']
})
export class ListMaterialComponent implements OnInit {
  filterTerm!: string;
  materials: Material[];
  deleteMaterial?:Material;

  constructor(
    private materialService: MaterialService,
    ){}

  ngOnInit(): void {
    this.getMaterials();
  }

  public getMaterials(): void {
    this.materialService.getMaterials().subscribe(
      (response: Material[]) => {
        this.materials = response;
      
        console.log(this.materials);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteMaterial(materialId : number) {
    console.log("delete "+ materialId);
    
    this.materialService.deleteMaterial(materialId).subscribe(
      (response) => {
        this.getMaterials();

      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }
  
}

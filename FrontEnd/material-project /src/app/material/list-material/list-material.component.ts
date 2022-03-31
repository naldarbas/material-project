import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(
    private activeRoute:ActivatedRoute,
    private materialService: MaterialService,
    private router:Router
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

}

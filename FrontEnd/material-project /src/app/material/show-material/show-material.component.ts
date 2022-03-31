import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Material } from 'src/app/material';
import { MaterialService } from '../material.service';
@Component({
  selector: 'app-show-monitor',
  templateUrl: './show-material.component.html',
  styleUrls: ['./show-material.component.css']
})

export class ShowMaterialComponent implements OnInit {

  material: Material;
 

  constructor(
    private activeRoute:ActivatedRoute,
    private materialService:MaterialService
  ) { }

  ngOnInit(): void {
    console.log('inside OnInit');

  //  const title  = this.activeRoute.snapshot.params['title'];
  //  this.materialService.getDataByTitel(title).subscribe(res => { this.item = res;})

  const id  = this.activeRoute.snapshot.params['id'];
   
    this.materialService.FetchDataById(id).subscribe(res => {

      this.material = res;
      
    })
  }
  


}

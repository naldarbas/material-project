import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../material/material.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor( private materialService:MaterialService) { }
  ngOnInit(): void {
  }
}

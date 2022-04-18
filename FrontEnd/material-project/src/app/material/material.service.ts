import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from '../material';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class MaterialService {
 
  material : Material [] =[];
  private apiServerUrl = environment.apiBackendUrl;

  constructor(private http: HttpClient){} 


  public getMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.apiServerUrl}/material/all`);
  }
  public addMaterial(material: Material): Observable<Material> {
    return this.http.post<Material>(`${this.apiServerUrl}/material/post`, material);
  }

  getDataByTitel(title: String) {
    return  this.http.get<Material>(`${this.apiServerUrl}/material/list`+ title );
   }
   
   FetchDataById(id: number) {
    return  this.http.get<Material>('http://localhost:8080/material/list/' + id );
   }


  public updateMaterial(material: Material): Observable<Material> {
    return this.http.put<Material>(`${this.apiServerUrl}/material/update`, material);
  }

  public deleteMaterial(materialId: number){
    return this.http.delete<Material>(`${this.apiServerUrl}/material/delete/${materialId}`);
  }

}
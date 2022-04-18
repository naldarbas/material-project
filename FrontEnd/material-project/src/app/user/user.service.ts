import { Injectable } from "@angular/core";
import { User } from "../user";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn:'root'})
export class UserService{
user : User [] =[];
private apiServerUrl = environment.apiBackendUrl;
constructor(private http: HttpClient){} 


  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/user/all`);
  }
  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/user/add`, user);
  }

   FetchDataById(id: number) {
    return  this.http.get<User>('http://localhost:8080/user/all/' + id );
   }


  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/user/update`, user);
  }


  public deleteUser(userId: number){
    return this.http.delete<User>(`${this.apiServerUrl}/user/delete/${userId}`);
  }
}
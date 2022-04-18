import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  filterTerm!: string;
  users: User[];
  deleteUser?:User;

  constructor(

    private userService: UserService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
        
      
        console.log(this.users);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
     
      }
    );
  }

  public onDeleteUser(userId : number) {
    console.log("delete "+ userId);
    
    this.userService.deleteUser(userId).subscribe(
      (response ) => {
      this.getUsers();
      this.router.navigateByUrl('user/list');

      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }


}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
 update?:User;
  
 constructor(private activeRoute:ActivatedRoute,
  private userService: UserService,private router: Router) { }

ngOnInit(): void {
  //to get previous data of Materal
  console.log('inside OnInit Edit');
  const id  = this.activeRoute.snapshot.params['id'];
  this.userService.FetchDataById(id).subscribe(res => {
    this.update = res;
    })
}


public onUpdateUser(user: User): void {
  this.userService.updateUser(user).subscribe(
    (response: User) => {
      console.log(response);
      this.userService.getUsers();
      this.router.navigateByUrl('list');
    },
    (error: HttpErrorResponse) => {
       console.log(error.message);
       
    }
  );
}


}

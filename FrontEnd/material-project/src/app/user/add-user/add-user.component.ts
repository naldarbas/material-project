import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  users: User[];
 state : string = "active";
 username ='';
  constructor(private userService: UserService){}
  
  ngOnInit(): void {}


  public onAddUser(addForm: NgForm): void {

     this.userService.addUser(addForm.value).subscribe(
       
       (response: User) => {
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

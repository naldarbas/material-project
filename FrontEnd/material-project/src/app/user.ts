export class User
{
      id:number;
      fullname:string;
      username:string;
      password:string;
      email:string;
      state:string;

      constructor
      (
        id?:number,
        fullname?:string,
        username?:string,
        password?:string,
        email?:string,
        state?:string,
       ) {}     
}
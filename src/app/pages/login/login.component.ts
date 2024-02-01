import { Component } from '@angular/core';
import { User } from 'src/app/Classes/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Login } from './login';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private logservice:LoginService,private router:Router,private snack:MatSnackBar){

  }

  // user:User=new User();

  log:Login=new Login();

  OnSubmit(){
    this.logservice.loguser(this.log).subscribe((data:any)=>{
      console.log(data.token);
      //set token and log the user
      this.logservice.loginuser(data.token);

      this.logservice.getcurrentuser().subscribe((user:any)=>{
        this.logservice.setuser(user);
        console.log(user)

        //
        if (this.logservice.getuserroll()=="ADMIN") {
         console.log("work by me")
         this.router.navigate([`admin-dashboard/profile`])
        }
       else if (this.logservice.getuserroll()=="NORMAL") {
        this.router.navigate([`user-dashboard/0`])
        } else {
          this.logservice.logout();
        }
      },
      (error=>{
        console.log(error);
        
      })
      
      )

    },
    (error)=>{
      console.log(error);
      this.snack.open("Invalid User Detail",'',{
        duration:3000
      });
    }
    
    )
  }
}

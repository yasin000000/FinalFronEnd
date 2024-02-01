import { Component } from '@angular/core';
import { User } from 'src/app/Classes/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import  Swal  from 'sweetalert2';
// import { Login } from '../login/login';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user:User=new User();

  

  constructor(private userservice:UserServiceService){}

  FormSubmit(){
    this.userservice.createEmp(this.user).subscribe((data:any)=>{
      console.log(data);
      Swal.fire('SucessFully Done',"User id is: "+data.id,'success')
    })

    this.userservice.sentMail(this.user).subscribe((data:any)=>{
      console.log("inside success")
      Swal.fire("Mail sent","mail sent to the "+this.user.email,"success")
    },(error)=>{
      console.log("inside error")
      console.log(error)
    })
  }
}

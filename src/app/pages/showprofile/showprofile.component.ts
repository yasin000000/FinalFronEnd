import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/Classes/user';

@Component({
  selector: 'app-showprofile',
  templateUrl: './showprofile.component.html',
  styleUrls: ['./showprofile.component.css']
})
export class ShowprofileComponent {
  user:User=new User();
  id!:number;
  role!:string;
  status!:string;
  constructor(private login:LoginService){}

  ngOnInit(){
    this.login.getcurrentuser().subscribe((data:any)=>{
      // console.log(data.userDetails.authorities[0])
      this.user=data.user;
      this.id=data.user.id;
      this.role=data.userDetails.authorities[0].authority;
      this.status="Active";
      console.log(this.user)
    })
  }

  public Getdata(){
    
  }

}

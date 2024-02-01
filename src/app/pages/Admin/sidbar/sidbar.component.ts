import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidbarComponent {
  constructor(private logout:LoginService,private router:Router){
  }

  Logout(){
    console.log("calling logout...")
    this.logout.logout();
    this.router.navigate([`/login`])
  }

}

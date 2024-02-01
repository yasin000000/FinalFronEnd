import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../pages/login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient:HttpClient) { }

  private baseUrl="http://localhost:9090";

  public loguser(log:any){
    return this.httpclient.post(`${this.baseUrl}/Authenticate`,log);
  } 

  public getcurrentuser(){
    return this.httpclient.get(`${this.baseUrl}/Current-User`);
  }

  //
  public loginuser(token:any){
    localStorage.setItem('token',token);
    return true;

  }

  public islogin(){
    let tokenStr=localStorage.getItem('token');
    if(tokenStr==undefined || tokenStr==null || tokenStr==''){
      return false;
    }
  else{
    return true;
  }
  }

  //logout
  public logout(){
    localStorage.removeItem('token');
    return true;
  }

  public gettoken(){
    return localStorage.getItem('token');
  }
  //setuserdetails
  public setuser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getuser(){
  let user= localStorage.getItem('user');
  if(user!=null)
{
  return JSON.parse(user);
}
else{
  this.logout();
  return null;
}
  }

  public getuserroll(){
  let user=this.getuser();
  console.log(user.userDetails.authorities[0].authority);
  return user.userDetails.authorities[0].authority;
  }
}

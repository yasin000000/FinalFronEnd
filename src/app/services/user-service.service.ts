import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../Classes/user';
import { Login } from '../pages/login/login';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpclient:HttpClient) { }
  private baseUrl="http://localhost:9090/user/";

  createEmp(user:User):Observable<object>{
   return this.httpclient.post(`${this.baseUrl}`,user);
  }

  sentMail(user:User):Observable<Object>{
   return this.httpclient.post<Object>(`${this.baseUrl}email`,user);
  }

 
 
}

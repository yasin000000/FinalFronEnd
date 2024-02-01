import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueitionsService {
  private baseUrl="http://localhost:9090/queition/";
  constructor(private http:HttpClient) { }
  getQueitions():Observable<Object>{
    return this.http.get<Object>(`${this.baseUrl}`)
  }

  getQueitionsOfQuize(id:any):Observable<Object>{
    return this.http.get<object>(`${this.baseUrl}quize/${id}`)
  }

  addQueitions(queitions:any){
    return this.http.post(`${this.baseUrl}`,queitions)
  }

  deleteQueition(id:any){
    return this.http.delete(`${this.baseUrl}${id}`);
  }

  getQueitionByQuize(id:any){
    return this.http.get(`${this.baseUrl}/quize/${id}`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quize } from '../Classes/quize';

@Injectable({
  providedIn: 'root'
})
export class QuizeService {

  constructor(private http:HttpClient) { }
  private baseUrl="http://localhost:9090/quize/";

getQuizedata():Observable<Quize[]>{
return this.http.get<Quize[]>(`${this.baseUrl}`);
}

addQuize(quize:Quize):Observable<Quize>{
  return this.http.post<Quize>(`${this.baseUrl}`,quize);
}
deleteQuize(quizeid:any):Observable<Object>{
 return this.http.delete<Object>(`${this.baseUrl}${quizeid}`)
}
getQuize(quizeid:any):Observable<Object>{
 return this.http.get<Object>(`${this.baseUrl}${quizeid}`)
}
updateQuize(quize:any):Observable<Object>{
 return this.http.put<Object>(`${this.baseUrl}`,quize)
}
getQuizeBycategoryId(id:any){
  return this.http.get(`${this.baseUrl}cat/${id}`)
}
getActiveQuizeBycategoryId(id:any){
  return this.http.get(`${this.baseUrl}cat/active/${id}`)
}

getActiveQuizedata():Observable<Quize[]>{
  return this.http.get<Quize[]>(`${this.baseUrl}active`);
  }
}

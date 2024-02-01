import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Classes/category';

@Injectable({
  providedIn: 'root'
})
export class CatagoryService {

  constructor(private httpclient:HttpClient) { }
  private baseUrl="http://localhost:9090/category/";
  //get all categories from the server
  getallcategories():Observable<Category[]>{
    return this.httpclient.get<Category[]>(`${this.baseUrl}`)
  }

  //add new category to server
  addcategory(category:Category):Observable<Category>{
    return this.httpclient.post<Category>(`${this.baseUrl}`,category);
  }

  getcategoryByid(id:any):Observable<Category[]>{
    console.log(`${this.baseUrl}${id}`)
    return this.httpclient.get<Category[]>(`${this.baseUrl}${id}`)
  }
  deleteCategory(id:any):Observable<Category>{
    console.log(`${this.baseUrl}${id}`)
    return this.httpclient.delete<Category>(`${this.baseUrl}${id}`)
  }
}
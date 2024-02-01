import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Category } from 'src/app/Classes/category';
import { CatagoryService } from 'src/app/services/catagory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent {

  // categories=[
  //   {cid:1,title:"java",description:"This is description for testing"},
  //   {cid:2,title:"python",description:"This is description for testing2"}
  // ]
  constructor(private category:CatagoryService){}
  categories!:Category[];

  ngOnInit(){
    this.category.getallcategories().subscribe(data=>{
      console.log(data)
      this.categories=data;
      
    },
    (error=>{
      console.log(error)
      Swal.fire("Error","Error in loading data from server","error") 
    }))

  }

  delete(id:any){
   
    this.category.deleteCategory(id).subscribe(data=>{
      console.log(data)
      this.categories=this.categories.filter((quize)=>quize.catagoryId !=id)
      Swal.fire("success !!","Category deleted Succesfuly","success")
    },(error)=>{
      console.log(error)
    })
  }

}

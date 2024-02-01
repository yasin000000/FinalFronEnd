import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Category } from 'src/app/Classes/category';
import { CatagoryService } from 'src/app/services/catagory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usidbar',
  templateUrl: './usidbar.component.html',
  styleUrls: ['./usidbar.component.css']
})
export class UsidbarComponent {
  category!:Category[]
  constructor(private categoryService:CatagoryService,private route:Router){}

  ngOnInit(){
    this.categoryService.getallcategories().subscribe((Data:any)=>{
      this.category=Data
    },
    (error)=>{
      Swal.fire("error !!","Error While loading Data","error")
    })
  }
  load(id:any){
    this.route.navigate([`/user-dashboard/${id}`])
  }
}

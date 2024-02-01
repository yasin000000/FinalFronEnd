import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from 'src/app/Classes/category';
import { CatagoryService } from 'src/app/services/catagory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-catagory',
  templateUrl: './add-catagory.component.html',
  styleUrls: ['./add-catagory.component.css']
})
export class AddCatagoryComponent {
  category:Category=new Category();
  constructor(private categoryservice:CatagoryService,private snack:MatSnackBar){}

  addCategory(){
    if(this.category.title.trim()=='' || this.category.title==null){
    this.snack.open("Catagory required !!",'',{
      duration:3000
    })
    return;
    }
    if(this.category.description.trim()=='' || this.category.description==null){
    this.snack.open("Description required !!",'',{
      duration:3000
    })
    return;
   }
  this.categoryservice.addcategory(this.category).subscribe((data:any)=>{
    console.log(data);
    this.category.description=""
    this.category.title=""
    Swal.fire("Succes !!","Category Added Succefully","success")
  },
  (error)=>{
    console.log(error);
    Swal.fire("Error !!","Internal Server Error Occured During Adding data","error");
  })
  }

}

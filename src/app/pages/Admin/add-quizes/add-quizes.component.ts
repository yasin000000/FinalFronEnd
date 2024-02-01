import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from 'src/app/Classes/category';
import { Quize } from 'src/app/Classes/quize';
import { CatagoryService } from 'src/app/services/catagory.service';
import { QuizeService } from 'src/app/services/quize.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quizes',
  templateUrl: './add-quizes.component.html',
  styleUrls: ['./add-quizes.component.css']
})
export class AddQuizesComponent {
  Category!:Category[];
  quize:Quize=new Quize()
  constructor(private categoryservice:CatagoryService,private snack:MatSnackBar,private quizeService:QuizeService){}
  // categories=[
  //   {cid:1, title:"Programing"},
  //   {cid:2, title:"Writing"}
  // ]

  ngOnInit(){
    this.categoryservice.getallcategories().subscribe(data=>{
      this.Category=data
      console.log(data)
      this.snack.open("Category Available for You right now From Server !!",'',{duration:3000})
    },
    (error=>{
      Swal.fire("Error !!","Error Occured While Getting categories From Server !!","error")
      // this.snack.open("Error occured !! While getting categories From Server ",'',{duration:3000})
      console.log(error)
    }))
  }
  addQuize(){
    this.quizeService.addQuize(this.quize).subscribe(data=>{
      console.log(data)
      Swal.fire("Succes !!","Quize Added Succesfully !!","success")
      this.quize.active=""
      this.quize.description=""
      this.quize.maxMarks=""
      this.quize.noOfQuestions=""
      this.quize.title=""
    })
  }
}

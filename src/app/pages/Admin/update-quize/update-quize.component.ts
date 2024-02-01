import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Classes/category';
import { Quize } from 'src/app/Classes/quize';
import { CatagoryService } from 'src/app/services/catagory.service';
import { QuizeService } from 'src/app/services/quize.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quize',
  templateUrl: './update-quize.component.html',
  styleUrls: ['./update-quize.component.css']
})
export class UpdateQuizeComponent {
  quizeid!:number
  quize!:Quize;
  Category!:Category[];
  constructor(private rout:ActivatedRoute,private quizeservice:QuizeService,private categoryservice:CatagoryService,private router:Router){}

  ngOnInit(){
    this.quizeid=this.rout.snapshot.params[`quizeid`];
    console.log(this.quizeid)
    this.quizeservice.getQuize(this.quizeid).subscribe((data:any)=>{
      this.categoryservice.getallcategories().subscribe(data=>{
        this.Category=data
      })
      this.quize=data
    })
  }
  updateQuize(){
    this.quizeservice.updateQuize(this.quize).subscribe(data=>{
      console.log(data)
      Swal.fire("Success !!","Quize Updated Succecefully ","success").then((e)=>{
        this.router.navigate([`/admin-dashboard/view-quize`])
      })
    },(error=>{
      Swal.fire("Failure !!","Failed to Update data to server","error")
    }))
  }
}
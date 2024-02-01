import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Queitions } from 'src/app/Classes/queitions';
import { QueitionsService } from 'src/app/services/queitions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-queitions',
  templateUrl: './view-queitions.component.html',
  styleUrls: ['./view-queitions.component.css']
})
export class ViewQueitionsComponent {

  quizeid!:number
  title!:String
  queitions!:Queitions[]

  constructor(private active:ActivatedRoute,private queitionsService:QueitionsService,private router:Router){}

  ngOnInit(){
  this.quizeid=this.active.snapshot.params[`quizeid`]
  this.title=this.active.snapshot.params[`title`]
  console.log(this.quizeid)
  console.log(this.title)
  this.queitionsService.getQueitionsOfQuize(this.quizeid).subscribe((data:any)=>{
    console.log(data);
    this.queitions=data
    
  },(error=>{
    console.log(error);
    Swal.fire("Error","Unable to load queitions from server","error")
    
  }))
  }
  addQueitions(id:any,title:any){
    // admin-dashboard/add-queitions/'+q.queistionsId
    this.router.navigate([`/admin-dashboard/add-queitions/${id}/${title}`])
  }
  DeleteQueition(id:any){
    this.queitions=this.queitions.filter((queitions)=>queitions.queistionsId !=id)
    this.queitionsService.deleteQueition(id).subscribe((data:any)=>{
      console.log(data);
      Swal.fire("Success !!","Deleted Queitions Succesfully","success")
    },
    (error=>{
      Swal.fire("error","Error While Deleting Queitin On Server","error")
    }))
  }
}

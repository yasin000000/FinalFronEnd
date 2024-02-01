import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Quize } from 'src/app/Classes/quize';
import { QuizeService } from 'src/app/services/quize.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizes',
  templateUrl: './view-quizes.component.html',
  styleUrls: ['./view-quizes.component.css']
})
export class ViewQuizesComponent {
  constructor(private quizeservice:QuizeService,private router:Router){}
  quizes!:Quize[];
  ngOnInit(){
    this.quizeservice.getQuizedata().subscribe(data=>{
      console.log(data)
    this.quizes=data
    },
    (error=>{
      console.log(error)
      Swal.fire("Error !!","Error Occured in internal Server ","error")
    })
    )
  }
  delete(quizeid: any){
    Swal.fire({icon:"info",title:"Are You Sure ?",
    confirmButtonText:"Delete",showCancelButton:true}).then(result=>{
      if(result.isConfirmed){
        this.quizeservice.deleteQuize(quizeid).subscribe(data=>{
          this.quizes=this.quizes.filter((quize)=>quize.quizeid !=quizeid)
          console.log(data)
          Swal.fire("Succes !!","SuccessFully Deleted Quize ","success")
        },(error=>{
          console.log(error)
          Swal.fire("Error !!","Error Occured While Deleting Quize","error")
        }))
      }
    })
  }
  Update(quizeid:any){
    this.router.navigate([`/admin-dashboard/update-quize/`,quizeid]);
  }
  viewQuietions(){
    
  }
  // quizes=[
  // { qid:20,
  //   title:"This is titile",
  //   description:"this is basic Discription for Quizes",
  //   maxMarks:"50",
  //   noOfQueitions:"20",
  //   active:""
  // },
  // { qid:21,
  //   title:"This is titile ",
  //   description:"this is basic Discription for in java",
  //   maxMarks:"50",
  //   noOfQueitions:"20",
  //   active:""
  // }
  // ]
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Queitions } from 'src/app/Classes/queitions';
import { QueitionsService } from 'src/app/services/queitions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-queitions',
  templateUrl: './add-queitions.component.html',
  styleUrls: ['./add-queitions.component.css']
})
export class AddQueitionsComponent {
  id!:number
  title!:string
  queition:Queitions=new Queitions();
constructor(private rout:ActivatedRoute,private queitionsService:QueitionsService){}

ngOnInit(){
 this.id=this.rout.snapshot.params['queistionsId']
  this.title=this.rout.snapshot.params['title']
  console.log("Seted id is :"+this.id);
  console.log(this.queition.quize);
  console.log(Queitions);
  
  this.queition.quize[`quizeid`]=this.id;
  
}

formSubmit(){
  this.queition.image="new.png";
  this.queitionsService.addQueitions(this.queition).subscribe((data:any)=>{
    console.log("Method Hited");
    this.queition.answer=""
    this.queition.content=""
    this.queition.option1=""
    this.queition.option2=""
    this.queition.option3=""  
    this.queition.option4=""
    
    console.log(data);
    Swal.fire("Success","Queition Added Succefully","success")
  },
  (errror=>{
    console.log(errror)
    Swal.fire("Error","Error While Adding Queition On Server","error")
  })
  )
}
}

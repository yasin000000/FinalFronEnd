import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QueitionsService } from 'src/app/services/queitions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  id!:any
  queition!:any

  marksGot=0
  correctAnswers=0;
  attempted=0;
  isSubmit=false

  timer:any;


  ngOnInit(){
    this.id=this.active.snapshot.params[`qid`]
    console.log(this.id)
    this.queition=this.QueitionService.getQueitionsOfQuize(this.id).subscribe(data=>{
      console.log("data is"+ data)
      this.queition=data
      this.queition.forEach((e:any) => {
        e[`givenAnswer`]=''
      });
     this.timer=this.queition.length*2*60
      
      console.log(this.queition);
      this.startTimer()
      // console.log( "Time is :"+ this.timer/(this.queition.length*2*60))
    }
    ,(error)=>{
      console.log(error)
      Swal.fire("Error!!","Error Occured On Server","error")
    })

  }
  constructor( private location: LocationStrategy,private active:ActivatedRoute,private QueitionService:QueitionsService){  
    // preventing back button in browser implemented by "Samba Siva"  
     history.pushState(null, window.location.href);  
    this.location.onPopState(() => {
      history.pushState(null, window.location.href);
    });  
    }
    submitQuize(){
      Swal.fire({title:"Do You Wanted To Submit the Quize",showDenyButton:true,showCancelButton:true,confirmButtonText:"Submit",
denyButtonText:"Don't Submit",icon:"info"}).then(result=>{
   if (result.isConfirmed) {
    this.evalQuize();
   }
   console.log(this.correctAnswers);
   console.log(this.marksGot);
   console.log(this.attempted)
   
   
   
    })
  }
  startTimer(){
  let t= window.setInterval(()=>{

      if(this.timer<=0){
        this.evalQuize()
        clearInterval(t)
      }else{
        this.timer--
      }
    },1000)
  }

  getFormatedTime(){
    let mm=Math.floor(this.timer/60)
    let ss=this.timer-mm*60
    return `${mm} min : ${ss} sec`
  }

  evalQuize(){
    this.isSubmit=true
    this.queition.forEach((element:any) => {
     
      if (element.givenAnswer==element.answer) {
        this.correctAnswers++
        let marksSingle=this.queition[0].quize.maxMarks/this.queition.length;
        this.marksGot+=marksSingle
      }
      console.log("value of an element :"+ element.givenAnswer);
      if(element.givenAnswer.trim()!=''){
        this.attempted++
      }
    }); 
  }
  printPage(){
    window.print()
  }
}

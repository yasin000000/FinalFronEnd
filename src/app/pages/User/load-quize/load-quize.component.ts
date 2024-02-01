import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quize } from 'src/app/Classes/quize';
import { CatagoryService } from 'src/app/services/catagory.service';
import { QueitionsService } from 'src/app/services/queitions.service';
import { QuizeService } from 'src/app/services/quize.service';

@Component({
  selector: 'app-load-quize',
  templateUrl: './load-quize.component.html',
  styleUrls: ['./load-quize.component.css']
})
export class LoadQuizeComponent {
id!:number
quizes: any;
quize!:any
  constructor(private Active:ActivatedRoute,private queitionServece:QueitionsService,private quizeservice:QuizeService,private category:CatagoryService){}

  ngOnInit(){
   
    console.log(this.id)
    
    this.Active.params.subscribe(data=>{ 
      
       this.id=this.Active.snapshot.params[`catId`]
      if(this.id==0){
        this.quize=""
        this.quizes="" 
        this.quizeservice.getActiveQuizedata().subscribe((data:any)=>{
          console.log(data);
          this.quizes=data
          return;
        })
      }
      if(this.id!=0){
        console.log("Else Executed..");
        console.log(this.id)
       
      this.quizeservice.getActiveQuizeBycategoryId(this.id).subscribe((data:any)=>{
        console.log(data.length);
        
       if(data.length>=1){
        console.log("if exicuted....");
        this.quize=""
        this.quizes="" 
        this.quizes=data
       }
       else{
        console.log(data);
        console.log("data in else :"+data);
        
        this.quizes="" 
        this.quize=""
        this.quize=data
        console.log(this.quize)
        
       }
        
      })
      }
    })
  }
}

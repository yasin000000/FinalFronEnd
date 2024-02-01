import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizeService } from 'src/app/services/quize.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent {

  qid!:any;
  quize:any;

  constructor(private Active:ActivatedRoute,private quizeService:QuizeService,private router:Router){}

  ngOnInit(){
    this.qid=this.Active.snapshot.params[`qid`]
    console.log(this.qid);
    this.quizeService.getQuize(this.qid).subscribe((data:any)=>{
      console.log(data)
      this.quize=data
    },
    (error)=>{
      Swal.fire("Error!!","Error Occured While Loading Quize","error");
    }
    )
    
  }
Start(){
Swal.fire({title:"Do You Wanted To start the Quize",showDenyButton:true,showCancelButton:true,confirmButtonText:"Start",
denyButtonText:"Don't Save",icon:"info"}).then(result=>{
  if (result.isConfirmed) {
    this.router.navigate([`/start/`+this.qid])
  }else if(result.isDenied){
    Swal.fire("Changes are not saved","","info")
  }
})
}
}

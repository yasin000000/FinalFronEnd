import { Quize } from "./quize"

export class Queitions {
          // private long queistionsId;
	
	// private String answer;
	
	// @Column(length = 5000)
	// private String content;
	
	// private String image;
	
	// private String option1;
	
	// private String option2;
	
	// private String option3;
	
	// private String option4;
	
	// @ManyToOne (fetch = FetchType.EAGER)
	// private Quize quize
          queistionsId!:number
          answer!:String
          content!:String
          image!:String
          option1!:String
          option2!:String
          option3!:String
          option4!:String
          quize:Quize=new Quize()
          

}


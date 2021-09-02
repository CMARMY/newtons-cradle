class rope{
	constructor(bodyA,bodyB,pointA,pointB){
    this.pointA=pointA
	this.pointB=pointB
    
	

	var option={
		bodyA:bodyA,bodyB:bodyB,
	   // pointB:{x:this.pointA,y:this.pointB},
	    stifness:0.01
	    
	}

   
	this.rope=Constraint.create(option)
    World.add(world,this.rope)
	}
    

	//create rope constraint here

	 display(){
	  var posA=this.rope.bodyA.position
      var posB=this.rope.bodyB.position
	  strokeWeight(3)
	  line (posA.x,posA.y,posB.x,posB.y)

	}



    //create display() here 

}

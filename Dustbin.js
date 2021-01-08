class Box{
    //Declaring all of the properties of box
       constructor(x,y){
              
           var options={
               restitution:0.8,
               density:1.0,
               friction:1.0
           }
   
           //"this" represents something to replace and is replaced with the name
           this.body=Bodies.rectangle(x,y,50,50,options);
           this.height=50;
           this.width=50;
           World.add(world,this.body);
       }
       display(){
   
           var pos=this.body.position;
           var angle=this.body.angle;
            push();
            translate(pos.x,pos.y)
            rotate(angle)
            rectMode(CENTER);
            strokeWeight(4);
            stroke("green");
            fill("purple");
            rect(0,0,this.width,this.height);
            pop();
   
       }
   
   
   
   
   
   
   
   
           
       
       
   
   
   
   
   
   
   
   
   
   
   }
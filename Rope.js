class Rope{

    constructor(pointA, bodyB){

        var options ={

            pointA: pointA,
            bodyB: bodyB, 
            stiffness: 0.1,
            length: 10

        }

       this.link =  Matter.Constraint.create(options);
       
       World.add(world, this.link)

    }

    display(){


      if(this.link.bodyB){

         //draw line between pointA and bodyB
         line(this.link.pointA.x, this.link.pointA.y, this.link.bodyB.position.x, this.link.bodyB.position.y);

      }
    
    }

    dettach(){

        this.link.bodyB = null;
    }

    attach(ropeBody){

        this.link.bodyB = ropeBody;
    }
    
}

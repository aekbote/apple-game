class Apple {

    constructor(x,y,r){

      var apple_options={

        isStatic: true,
        friction: 0,
        restitution: 0,
      }

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r,apple_options);

        this.image = loadImage("apple.png");
        World.add(world, this.body);

    }

    display(){

        var applePos=this.body.position;	
		push();
		translate(applePos.x, applePos.y);
		imageMode(CENTER);
		image(this.image, 0,0,this.r*3, this.r*3)
		pop();
    }
}
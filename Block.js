class Block {

    constructor(x, y, width, height) {

        var options={
          restitution : 0.7,
          friction : 0.6,
          isStatic : false
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

      }

      display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        if(this.body.speed < 5){

            push ();
    
            translate(pos.x,pos.y);
            rotate (angle);
            
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
    
            pop ();

        } else {

            push ();

            this.visibility = this.visibility-5;
            World.remove(world,this.body);

            tint(255,this.visibility);

            pop();

        }

    }

}

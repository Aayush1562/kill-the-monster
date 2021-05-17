class Box{
    constructor(x,y,width,height){
        var options = {
            restitution:0.08,
            friction:1.0,
            density:20
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.heigth = height;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angel = this.body.angel;
        push();
        translate(pos.x,pos.y);
        rotate(angel);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("BLACK");
        fill("red");
        rect(0,0,this.width,this.height);
        pop();


    }

    
}


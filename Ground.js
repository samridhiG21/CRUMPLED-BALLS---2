class Ground{
    constructor(){
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(500,550,1000,50,options);
        World.add(world,this.body);
    }

    display(){
       // var pos = this.body.position;
        fill("white");
        rectMode(CENTER);
        rect(500,550,1000,10);
    }
}
function Boxs(x, y, w, h, options) {

    // add options such as friction and restitution. Experiment with the values
    var options = {
        friction: 0.3,
        restitution: 0.5,
    }
 
   // create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;

    World.add(world, this.body);

     // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
 
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        fill(5);
        stroke(255);
        rect(0, 0, this.w, this.h);
        pop();
    }
}

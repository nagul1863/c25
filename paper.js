class paper
{
    constructor(x,y,r)
    {
        this.x=x;
		this.y=y;
		this.r=r;
        var options=
		{
			restitution:0.3,
			friction: 0,
			density:1.2
		}

        this.image = loadImage("paper.png");

		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
     
    }

    display()
    {
        var paperpos=this.body.position;		
        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
      image(this.image,0,0,this.r,50)
			pop()
    }
}
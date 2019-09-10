class Cloud{
	constructor(){
		this.drops = [];

	}

	//create rain drops
	createDrop(){

	}
}
class Drop{
	constructor(){
		this.x = 40;
		this.y = 0;
	}
	update(){
		this.y ++;
		fill(0,0,5);
		circle(this.x, this.y, 5);
	}

}


var d = new Drop();

//before it starts, this is called
function setup() {
	createCanvas(400,300);
}


//most pcs will call this 60 times a second
function draw(){
	d.update();

}


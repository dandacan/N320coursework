class Drop{
	//once created,
	constructor(){
		//randomize the x and y position, as well as set "done" to false
		this.x = Math.random() * 800;
		this.y = Math.random() * 40;
		this.done = false;
	}
	update(){
		//increase the value of y to move the thing down
		this.y ++;
		//if above the ground, draw it
		if(this.y < 500){
			this.Fill();
			// otherwise, set "done" to true
		}else if(this.y >= 500){
			this.done = true;
		}
	}
	Fill(){
		//set a color to render as
		fill(0,0,200);
		//create a circle where it is
		circle(this.x, this.y, 5);
	}

}

class Ground{
	constructor(){
		//set to and from points for lerping, as well as how far it is
		this.colorBase = 0;
		this.colorTo = 255;
		this.colorPercent = 0.05;
	}
	update(){
		//set the color mode to RGB just to be sure
		colorMode(RGB);
		//set the color to a lerp from start to end, and color%
		fill(lerpColor(color(50,50,this.colorBase, 200), color(0,0,this.colorTo, 255), this.colorPercent));
		//draw a rectangle
		rect(0, 500, 800, 100);
	}
}

class Cloud{
	//take ground in the constructor and declare variables
	constructor(ground){
		this.drops = [];
		this.ground = ground;
	}

	//create rain drops
	createDrop(){
		this.drops.push(new Drop());
	}

	update(){
		//for every drop...
		for (var i = this.drops.length - 1; i >= 0; i--) {
			//update the drops
			this.drops[i].update();
			//check if its done, and if so, move the ground color up by 5%, as well as delete the drop
			if(this.drops[i].done == true){
				this.drops.splice(i, 1);
				this.ground.colorPercent += 0.05;
			}
		}
		//also update the ground
		this.ground.update();
	}
}

//instatiate 'em
var ground = new Ground();
var cloud = new Cloud(ground);

//before it starts, this is called
function setup() {
	createCanvas(800,600);
}


//most pcs will call this 60 times a second
function draw(){
	//redraw the background as white in RGB
	colorMode(RGB);
	background(255);
	//5% of frames will spawn a drop
	if (Math.random() < 0.05){
		cloud.createDrop();
	}
	//update the stuffs
	cloud.update();
}


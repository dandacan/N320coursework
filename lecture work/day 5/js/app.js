class dog {
	constructor(name, ){
		this.informees = [];
		this.name = name;
	}

	alert(){
		for (var i = this.informees.length - 1; i >= 0; i--) {
			console.log(this.name + " barks at " + this.informees[i].name);
		}
	}

}
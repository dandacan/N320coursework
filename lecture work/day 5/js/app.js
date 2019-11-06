class dog {
	constructor(name, informees){
		this.informees = informees;
		this.name = name;
	}

	alert(){
		for (var i = this.informees.length - 1; i >= 0; i--) {
			console.log(this.name + " barks at " + this.informees[i].name);
		}
	}
}
class human{
	constructor(name){
		this.name = name;
	}
}

var bob = new human("bob");
var phil = new human("phil");
var albert = new human("albert");

var fido = new dog("fido", [bob, phil, albert]);

fido.alert();
class person {
	constructor(name){
		this.name = name;
	}
	greet(person){
		console.log("Hello, "+ person.name + "! I am " + this.name + ".");
		person.talk(this);
	}
	talk(person){
		console.log("Nice to meet you, " + person.name + "!");
	}
}
dan = new person("dan");
sbeve = new person("sbeve");
dan.greet(sbeve);
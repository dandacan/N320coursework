class human{
	constructor(name, age, gender){
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
	greet(){
		console.log("Hello! My name is "+this.name+", I am "+ this.age + " years old, and I am "+ this.gender +".");
	}
}
class subhuman extends human{
	constructor(name, age, gender, iq){
		super(name, age, gender);
		this.iq = iq;
	}
	complain(){
		console.log("Dangit! This iq test says I have an iq of " + this.iq + ".");
	}
}

dummy = new subhuman("derp", "25", "Male", -5);

dummy.greet();
dummy.complain();
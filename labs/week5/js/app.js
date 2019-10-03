Vue.component("student-card", {
	props: [ "student", "isactive" ],
	template: "<div class='student' v-bind:class='{ cardActive : isactive }'>{{ student.name }}<br>  skill: {{ student.skill }} <br> current joy: {{ student.joy }}</div>"
});

var app = new Vue({
	el: "#flapp",
	data: {
		students:[
			{name: "Mr. Meeseeks", skill: 3, joy: -2},
			{name: "Jerry", skill: 1, joy: 4},
			{name: "Rick", skill: 8, joy: 2}
		],

		currentStudent:{
			name: "Mr. Meeseeks", skill: 3, joy: -2
		}, 
		curStudentId: 0,
		cardActive: true
	},
	methods: {
		arrowClicked: function() {
			this.cardActive = !this.cardActive;
			setTimeout( () => {
				this.currentStudent.skill ++;
				this.currentStudent.joy --;
				this.curStudentId ++;
				if(this.curStudentId >= this.students.length){
					this.curStudentId = 0;
				}
				this.currentStudent = this.students[this.curStudentId];
				this.cardActive = !this.cardActive;
			}, 500);
		},
		arrowBack: function() {
            this.cardActive = !this.cardActive
            setTimeout( () => {
                
        		this.currentStudent.skill--;
                this.currentStudent.joy++;
                this.curStudentId --;
                if(this.curStudentId < 0){
                    this.curStudentId = 2;
                }

                
                this.currentStudent = this.students[this.curStudentId];
               

                this.cardActive = !this.cardActive;
            }, 500);
        }
	}
});
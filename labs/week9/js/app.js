var v = new Vue({
	el: "#app",
	mounted: function() {
		axios.get("data/data.json")
		.then( (response) => {
			this.cpus = response.data
		})
	},
	data: {
		cpus: {}
	}

	
})
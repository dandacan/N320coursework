<template>
	<div class="roll">
		<button v-on:click="passrolls">{{ text }}</button>
	</div>
</template>

<script>
	export default{
		name: "roll",
		props: {
			text: String,
			length: Number
		},
		data: {
			rolls: [0,0,0,0,0]
		}
		methods: {
			passrolls (event){
				this.rolls = [];
				for (var i = 0; i <= this.length; i++) {
					this.rolls.push({i: i, value: Math.round(((Math.random()*5)+ 1))});
				}
				this.$emit('rolled', this.rolls);
			}
		}

	}
	
</script>
<style>
	
</style>
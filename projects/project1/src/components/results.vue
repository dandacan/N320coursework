<template>
	<div id="results">
		<div id="dierolls">
			<div v-if="!hasRerolled">
				<div  v-for="roll in rolls" :class="roll.i" v-bind:key="roll.i">
					<input type="checkbox" v-if="!hasRerolled" v-bind:key="roll.i" :name="roll.i" v-on:input="checkbox"> {{ roll.value }}
				</div>
				<roll v-if="rollLenght>0" v-on:rolled="handleReroll" text="reroll" :length="rollLenght"></roll>
			</div>
			<div v-if="hasRerolled">
				<div v-for="roll in rerolls" v-bind:key="roll.i">
					{{ roll.value }}
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	//import scores from "../scores.js";
	import roll from "./roll.vue";
	export default{
		name: "results",
		components:{
			roll
		},
		props: {
			rolls: Array,
			hasRerolled: Boolean
		}, 
		data: function() {
			return{
				rerolls: [],
				rollLenght: 0,
				rerollselect: []
			}
		},
		methods: {
			handleReroll: function(rolls){
				for(var i=0; i<5; i++){
					if ((this.rerollselect[i] in this.rolls)) {
						this.rerolls.push(this.rolls[i]);
					} 
				}
				this.rerolls = this.rerolls.concat(rolls);
				this.$emit('rerolled');
			},
			checkbox: function(e){
				if(e.target.value){
					this.rerollselect.push(this.rolls[e.target.name]);
					this.rollLenght++;
				}
				else{
					this.rerollselect = this.rerollselect.filter(function(curval){return curval.i != e.target.name});
					this.rollLenght--;
				}
			}
		}
		
	}
</script>
<style>
	
</style>
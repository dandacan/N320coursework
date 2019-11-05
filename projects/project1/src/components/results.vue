<template>
	<div id="results">
		<div id="dierolls">
			<form>
				<div v-for="roll in rolls" class="roll">
					<input type="checkbox" :name="{{ roll.i }}"> {{ roll.value }}
				</div>
			</form>
		</div>
	</div>
</template>
<script>
	import scores from "../scores.js";
	import roll from "./roll.vue";
	export default{
		name: "results",
		props: {
			rolls: Array
		}
		
	}
</script>
<style>
	
</style>
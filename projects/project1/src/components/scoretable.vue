<template>
	<table id="scoretable">
		<tr>
			<th>Field</th>
			<th>Score</th>
		</tr>
		<tr>
			<td>1s:</td>
			<td>{{ scores.ones }}</td>
		</tr>
		<tr>
			<td>2s:</td>
			<td>{{ scores.twos }}</td>
		</tr>
		<tr>
			<td>3s:</td>
			<td>{{ scores.threes }}</td>
		</tr>
		<tr>
			<td>4s:</td>
			<td>{{ scores.fours }}</td>
		</tr>
		<tr>
			<td>5s:</td>
			<td>{{ scores.fives }}</td>
		</tr>
		<tr>
			<td>6s:</td>
			<td>{{ scores.sixes }}</td>
		</tr>
		<tr>
			<td>upper bonus:</td>
			<td>{{ scores.bonusupper }}</td>
		</tr>
		<tr>
			<td>chance:</td>
			<td>{{ scores.chance }}</td>
		</tr>
		<tr>
			<td>three of a kind:</td>
			<td>{{ scores.threeofkind }}</td>
		</tr>
		<tr>
			<td>four of a kind:</td>
			<td>{{ scores.fourofkind }}</td>
		</tr>
		<tr>
			<td>small straight:</td>
			<td>{{ scores.smlstr8 }}</td>
		</tr>
		<tr>
			<td>large straight:</td>
			<td>{{ scores.lgstr8 }}</td>
		</tr>
		<tr>
			<td>full house:</td>
			<td>{{ scores.fullhouse }}</td>
		</tr>
		<tr>
			<td>yahtzee:</td>
			<td>{{ scores.yahtzee }}</td>
		</tr>
		<tr>
			<td>lower bonus:</td>
			<td>{{ scores.bonuslower }}</td>
		</tr>
		<tr>
			<td>total score:</td>
			<td>{{ scores.total }}</td>
		</tr>		
	</table>
</template>

<script>
	import scores from "../scores.js";

	export default {
		name: "scoretable",
		data: function() {
			return {
				scores: scores 
			}
		}
	}
</script>
<style>
	
</style>
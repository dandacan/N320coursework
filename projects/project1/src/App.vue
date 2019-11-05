<template>
  <div id="app">
    <div id="table">
      <scoretable></scoretable>
    </div>
    <roll v-on:rolled="handleRoll" text="roll"></roll>
    <results v-if:hasRolled :rolls="rolls" :length="5"></results>
  </div>
</template>

<script>
import scoretable from "components/scoretable.vue";
import roll from "components/roll.vue";
import results from "components/results.vue";

export default {
  name: 'app',
  components: {
    scoretable, roll, results
  }
  data:{
    rolls: [],
    hasRolled: false
  }
  methods:{
    handleRoll(rolls) {
      this.rolls = rolls;
      this.hasRolled = true;
    }
  }
}
</script>

<style>
#app {
}
</style>

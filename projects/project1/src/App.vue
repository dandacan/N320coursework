<template>
  <div id="app">
    <div id="table">
      <scoretable></scoretable>
    </div>
    <roll v-on:rolled="handleRoll" text="roll" :length="5"></roll>
    <results v-if="hasRolled" :rolls="rolls" :hasRerolled="hasRerolled" v-on:rerolled="handlereroll"></results>
  </div>
</template>

<script>
import scoretable from "./components/scoretable.vue";
import roll from "./components/roll.vue";
import results from "./components/results.vue";

export default {
  name: 'app',
  components: {
    scoretable, roll, results
  },
  data: function() {
    return{
      rolls: [],
      hasRolled: false,
      hasRerolled: false
    }
  },
  methods:{
    handleRoll(rolls) {
      this.rolls = rolls;
      if (!this.hasRolled) {
        this.hasRolled = true;
      }
    },
    handlereroll(){
      this.hasRerolled = true;
    }
  }
}
</script>

<style>
#app {
}
</style>

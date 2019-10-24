<template>
    <div>
    	<!--here is your farm-->
        <div class="farm">
        	<!--for every plot, put in pot.plant-->
            <div v-for="plot in plots"
                class="plot">
                {{ plot.plant }}
            </div>

        </div>
    </div>
</template>

<script>
//keep gamedata to persist the dataz
import GameData from "../GameData.js"

export default {
	//for the dataz, set plots to gamedata.plots
    data: function() {
        return {
            plots: GameData.plots
        }
    },
    //exported as farm
    name: "Farm"
}
</script>

<style scoped>
    .farm {
        display: flex;
    }

    .plot {
        width: 40px;
        height: 40px;
        margin: 2px;
        border: 1px solid #aaa;
    }
</style>
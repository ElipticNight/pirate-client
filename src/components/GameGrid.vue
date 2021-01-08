<template>
	<div>
		<button @click="triggerTest()">click me</button>
    <div class="grid-container" :style="cssVars">
			<GameGridSquare v-for="i in squareNos" :key="i" ref="test"></GameGridSquare>
    </div>
  </div>
</template>

<script>
import GameGridSquare from "../components/GameGridSquare.vue";

export default {
	components: { GameGridSquare },
	data: function() {
		return {
			gridSize: 7,
		};
	},
	computed: {
		squareNos() {
			return this.gridSize ** 2
		},
		cssVars() {
			return {
				'--grid-dimensions': this.gridSize
			};
		}
	},
	methods: {
		triggerTest: function() {
			this.$refs.test[Math.floor(Math.random() * 48)].activated();
		}
	}
};
</script>

<style lang="scss" scoped>
.grid-container {
    width: 75vh;
    height: 75vh;
    display: grid;
    grid-template-rows: repeat(var(--grid-dimensions), 1fr);
		grid-template-columns: repeat(var(--grid-dimensions), 1fr);
}
</style>
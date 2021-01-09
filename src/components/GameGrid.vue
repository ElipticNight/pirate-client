<template>
	<div class="layout">
		<div>
			<button @click="triggerTest()" hidden>click me</button>
			<div class="grid-container" :style="cssVars">
				<GameGridSquare v-for="i in squareNos" :key="i" ref="test"></GameGridSquare>
			</div>
		</div>
		<SquareList></SquareList>
  </div>
</template>

<script>
//to start have an element i can click, and then i can click on squares to apply
//dont bother with draggable yet
import GameGridSquare from "../components/GameGridSquare.vue";
import SquareList from "../components/SquareList.vue";

export default {
	components: { GameGridSquare, SquareList },
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
.layout {
	display: grid;
	grid-template-columns: 2fr 1fr;
}
.grid-container {
    width: 75vh;
    height: 75vh;
    display: grid;
    grid-template-rows: repeat(var(--grid-dimensions), 1fr);
		grid-template-columns: repeat(var(--grid-dimensions), 1fr);
}
</style>
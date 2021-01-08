<template>
	<div>
    <div class="grid-container" :style="cssVars">
			<div v-for="i in squareNos" :key="i" class="square" ></div>
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            gridSize: 7
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
    .square {
			height: 100%;
			border: solid 1px black;
			&:hover {
					background-color: lightblue;
			}
    }
}
</style>
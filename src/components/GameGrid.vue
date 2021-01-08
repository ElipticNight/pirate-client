<template>
	<div>
    <div class="grid-container">
				<div v-for="row in gridValues" :key="row" class="grid-row">
					<div v-for="column in row" :key="column">
						<div class="square" ref="{{ column }}">{{ column }}</div>
					</div>
				</div>
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            gridValues: {
							a: [1, 2, 3],
							b: [4, 5, 6],
							c: [7, 8, 9]
						}
        };
    }
};
</script>

<style lang="scss" scoped>
.grid-container {
    width: 50vw;
    height: 50vh;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
		.grid-row {
			display: grid;
			grid-template-columns: repeat(3, 1fr);			
		}
    .square {
			height: 100%;
        border: solid 1px black;
        &:hover {
            background-color: lightblue;
        }
    }
}
</style>
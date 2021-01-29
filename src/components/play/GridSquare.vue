<template>
	<div class="square">
		<div v-if="squareValue !== null" class="square-value">
			{{ squareValue }}
		</div>
	</div>
</template>

<script>
export default {
	props: ["reference"],
	computed: {
		squareValue() {
			return this.$store.state.play.gameGridValues[this.reference-1];
		}
	}
}
</script>

<style lang="scss" scoped>
.square {
	height: 100%;
	border: solid 1px black;
	display: flex;
	flex-direction: column;
	justify-content: center;
	.square-value {
		text-align: center;
		font-size: 1.5vh;
    color: black;
    font-weight: bold;
    user-select: none;
	}
}
</style>
<template>
	<div @click="activated()" class="square">
		<div v-if="squareValue !== null" class="square-value">
			{{ squareValue }}
		</div>
	</div>
</template>

<script>
export default {
	props: ["reference"],
	data: function() {
		return {
			squareValue: null
		};
	},
	methods: {
		activated: function () {
			if(this.squareValue === this.$store.state.setup.activeValue) {
				this.$store.state.play.gameGridValues[this.reference] = null;
				this.$store.state.setup.availablePoints[this.squareValue] ++;
				this.squareValue = null;
			} else {
				this.squareValue = this.$store.state.setup.activeValue;
				this.$store.state.play.gameGridValues[this.reference] = this.squareValue;
				this.$store.state.setup.availablePoints[this.squareValue] --;
			}
			console.log(this.$store.state.setup.availablePoints)
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
		font-size: large;
    color: black;
    font-weight: bold;
    user-select: none;
	}
}
.activated {
	background-color: lightcoral;
}
</style>
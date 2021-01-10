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
			this.activeValue = this.$store.state.setup.activeValue;
			this.availablePoints = this.$store.state.setup.availablePoints[this.activeValue];

			if(this.squareValue !== null) {
				this.$store.commit('incrementAvailablePoints', this.squareValue);
			} 
			if(this.availablePoints !== 0 || this.squareValue === this.activeValue) {
				if(this.squareValue === this.activeValue) {
					this.squareValue = null;
				} else {
					this.$store.commit('decrementAvailablePoints', this.activeValue);
					this.squareValue = this.activeValue;
				}
				this.$store.commit('storeGameGridValue', [this.reference, this.squareValue]);
			} else {
				console.log('out of points');
			}
			console.log(this.$store.state.play.gameGridValues);
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
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
	computed: {
		squareValue: {
			get: function() {
				return this.$store.state.play.gameGridValues[this.reference-1];
			},
			set: function(newValue) {
				this.$store.state.play.gameGridValues[this.reference-1] = newValue;
			}
		}
	},
	methods: {
		activated: function () {
			this.activeValue = this.$store.state.setup.activeValue;
			this.availablePointsActions = this.$store.state.setup.availablePointsActions[this.activeValue];

			if(this.availablePointsActions !== 0 || this.squareValue === this.activeValue) {
				if(this.squareValue !== null) {
					this.$store.commit('incrementAvailablePointsActions', this.squareValue);
				}
				if(this.squareValue === this.activeValue) {
					this.$store.commit('storeGameGridValue', [this.reference, null]);
				} else {
					if(this.activeValue !== null) {
					this.$store.commit('decrementAvailablePointsActions', this.activeValue);
					}
					this.$store.commit('storeGameGridValue', [this.reference, this.activeValue]);
				}
			} else {
				console.log('out of points');
			}
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
.activated {
	background-color: lightcoral;
}
</style>
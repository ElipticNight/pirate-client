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
			if(this.squareValue === this.activeValue) {
				this.$store.commit('storeGameGridValue', this.reference, null);
				if (this.squareValue) {
					this.$store.commit('incrementAvailablePoints', this.squareValue);
				}
				this.squareValue = null;
			} else if (this.availablePoints !== 0) {
				this.squareValue = this.activeValue;
				this.$store.commit('storeGameGridValue', this.reference, this.squareValue);
				if (this.squareValue) {
					this.$store.commit('decrementAvailablePoints', this.squareValue);
				}
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
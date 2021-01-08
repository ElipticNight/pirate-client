<template>
	<div @click="activated()" class="square" v-bind:class="{ activated: isActivated }"></div>
</template>

<script>
export default {
	data: function() {
		return {
			isActivated: false
		};
	},
	methods: {
		activated: function () {
			this.isActivated = !this.isActivated
		}
	}
}
</script>

<style lang="scss" scoped>
.square {
	height: 100%;
	border: solid 1px black;
}
.activated {
	background-color: lightcoral;
}
</style>
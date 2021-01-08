<template>
	<div @click="clicked()" class="square" v-bind:class="{ clicked: isClicked }"></div>
</template>

<script>
export default {
	data: function() {
		return {
			isClicked: false
		};
	},
	methods: {
		clicked: function () {
			this.isClicked = !this.isClicked
		}
	},
}
</script>

<style lang="scss" scoped>
.square {
	height: 100%;
	border: solid 1px black;
	&:hover {
			background-color: lightblue;
	}
}
.clicked {
	background-color: lightcoral;
}
</style>
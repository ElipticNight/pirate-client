<template>
	<div @click="clicked()" class="square" v-bind:class="{ clicked: isClicked }"></div>
</template>

<script>
export default {
	props: ['trigger'],

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
	watch: {
		trigger: function() {
			console.log('test');
		}
	}
}
</script>

<style lang="scss" scoped>
.square {
	height: 100%;
	border: solid 1px black;
}
.clicked {
	background-color: lightcoral;
}
</style>
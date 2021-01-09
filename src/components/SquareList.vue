<template>
	<div>
    <div class="grid-container" :style="cssVars">
			<div v-for="i in columnNos" :key="i" class="test">
        <div class="test-child"></div>
        <div class="test-child"></div>
      </div>
    </div>
  </div>
</template>

<script>
//to start have an element i can click, and then i can click on squares to apply
//dont bother with draggable yet

export default {
	data: function() {
		return {
			squareTypeNos: 10,
		};
	},
	computed: {
		columnNos() {
			return this.squareTypeNos / 2
		},
		cssVars() {
			return {
				'--grid-rows': this.columnNos
			};
		}
	},
	methods: {
		triggerTest: function() {
			this.$refs.test[Math.floor(Math.random() * 48)].activated();
		}
	}
};
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-rows: repeat(var(--grid-rows), 1fr);
  height: 75vh;
  place-items: center;
  .test {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    width: 100px;
    height: 50px;
    .test-child {
      width: 100%;
      height: 100%;
      border: solid 1px black;
    }
  }
}
</style>
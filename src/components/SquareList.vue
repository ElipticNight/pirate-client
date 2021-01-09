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
export default {
	data: function() {
		return {
			squareTypeNos: 12,
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
    column-gap: 2vh;
    width: 16vh;
    height: 7vh;
    .test-child {
      width: 100%;
      height: 100%;
      border: solid 1px black;
    }
  }
}
</style>
<template>
  <div class="wrapper">
    <div @click="activated()" class="box" v-bind:class="{ activated: isActivated }">
      {{ points }}
    </div>
    <div class="number">
      x {{ availability }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["points", "availability", "reference"],
  computed: {
		isActivated() {
			return (this.$store.state.setup.active === this.reference);
		}
	},
	methods: {
		activated: function () {
      if (this.$store.state.setup.active === this.reference) {
        this.$store.state.setup.active = null;
        this.$store.state.setup.activeValue = null;
      } else {
        this.$store.state.setup.active = this.reference;
        this.$store.state.setup.activeValue = this.points;
      }
		}
	}
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  .box {
    width: 7vh;
    height: 7vh;
    border: solid 1px black;
    text-align: center;
    vertical-align: middle;
    line-height: 7vh;
    font-size: large;
    color: black;
    font-weight: bold;
    user-select: none;
  }
  .number {
    text-align: center;
    vertical-align: middle;
    line-height: 7vh;
    font-size: large;
    color: black;
    font-weight: bold;
    user-select: none;
  }
  .activated {
    background-color: salmon;
  }
}
</style>
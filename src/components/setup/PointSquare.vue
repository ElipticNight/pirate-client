<template>
  <div class="wrapper">
    <div @click="activated()" class="box" v-bind:class="{ activated: isActivated }">
      {{ points }}
    </div>
    <div class="number">
      x {{ available }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["points", "availability", "reference"],
  computed: {
		isActivated() {
			return this.$store.state.setup.active === this.reference;
    },
    available() {
      //this wont be reactive due to it being direct array manipulation
      //find the workaround
      return this.$store.state.setup.availablePoints[this.points];
    }
  },
  created() {
    this.$set(this.$store.state.setup.availablePoints, this.points, this.availability);
  },
	methods: {
		activated: function () {
      if (this.$store.state.setup.active === this.reference) {
        this.$store.commit('setActive', null);
        this.$store.commit('setActiveValue', null);
      } else {
        this.$store.commit('setActive', this.reference);
        this.$store.commit('setActiveValue', this.points);
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
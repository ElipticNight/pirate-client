<template>
  <div v-bind:class="{ wrapper: isPoints }">
    <div @click="activated()" class="box" v-bind:class="{ activated: isActivated, unavailable: !available }">
      {{ value }}
    </div>
    <div v-if="isPoints" class="number">
      x {{ available }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["reference"],
  computed: {
    isPoints() {
      return this.reference <=3;
    },
		isActivated() {
			return this.$store.state.setup.active === this.reference;
    },
    value() {
      return Object.keys(this.$store.state.setup.availablePointsActions)[this.reference];
    },
    available() {
      return this.$store.state.setup.availablePointsActions[this.value];
    }
  },
	methods: {
		activated: function () {
      if (this.$store.state.setup.active === this.reference) {
        this.$store.commit('setActive', null);
        this.$store.commit('setActiveValue', null);
      } else {
        this.$store.commit('setActive', this.reference);
        this.$store.commit('setActiveValue', this.value);
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
}
.box {
  width: 7vh;
  height: 7vh;
  border: solid 1px black;
  text-align: center;
  vertical-align: middle;
  line-height: 7vh;
  font-size: 1.5vh;
  color: black;
  font-weight: bold;
  user-select: none;
}
.number {
  text-align: center;
  vertical-align: middle;
  line-height: 7vh;
  font-size: 2vh;
  color: black;
  font-weight: bold;
  user-select: none;
}
.activated {
  background-color: lightblue;
}
.unavailable {
  box-shadow: 0px 0px 2px 3px red;
  background-color: lightcoral;
}
</style>
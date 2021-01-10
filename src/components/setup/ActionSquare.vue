<template>
  <div @click="activated()" class="box" v-bind:class="{ activated: isActivated }">
    {{ value }}
  </div>

</template>

<script>
export default {
  props: ["reference"],
  computed: {
		isActivated() {
			return this.$store.state.setup.active === this.reference;
    },
    value() {
      return this.$store.state.setup.availableActions[this.reference];
    }
  },
	methods: {
		activated: function () {
      console.log(this.reference);
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

.activated {
  background-color: salmon;
}
</style>
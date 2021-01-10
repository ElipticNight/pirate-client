<template>
  <div class="wrapper">
    <div @click="activated()" class="box" v-bind:class="{ activated: isActivated }">
      {{ Value }}
    </div>
    <div class="number">
      {{ Availability }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["Value", "Availability", "reference"],
  computed: {
		isActivated() {
			return (this.$store.state.setup.active === this.reference);
		}
	},
	methods: {
		activated: function () {
      if (this.$store.state.setup.active === this.reference) {
        this.$store.state.setup.active = this.null;
      } else {
        this.$store.state.setup.active = this.reference;
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
  }
  .activated {
    background-color: salmon;
  }
}
</style>
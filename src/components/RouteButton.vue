<template>
  <button class="home-button" @click="navigate()">{{ buttonText }}</button>
</template>

<script>
export default {
    props: [
        'buttonText',
        'routeTarget'
        ],
    methods: {
        navigate() {
            this.$router.push("/" + this.routeTarget);
        }
    }
}
</script>

<style lang="scss" scoped>
.home-button {
  height: 75px;
  background-color: darkblue;
  color: white;
  border: none;
  border-radius: 20px;
}
</style>
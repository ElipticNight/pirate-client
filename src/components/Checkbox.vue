<template>
  <div>
    <label class="label-container">
      <input type="checkbox" />
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: ["label"]
};
</script>

<style lang="scss" scoped>
.label-container {
  color: darkblue;
  padding: 10px 20px;
  border-radius: 20px;
  &:hover {
    background-color: #2a4a6d;
  }
}
</style>

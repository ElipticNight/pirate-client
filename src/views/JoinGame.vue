<template>
  <div class="base-window">
    <div class="base-container">
      <div class="base-title">
        <h1>Join Game</h1>
      </div>
      <div class="content">
        <div class="avatar"></div>
        <input
          class="game-id-button"
          type="text"
          v-model="roomID"
          placeholder="Avatar"
        />
        <input
          class="game-id-button"
          type="text"
          v-model="roomID"
          placeholder="Room ID"
        />
        <input
          class="game-id-button"
          type="text"
          v-model="name"
          placeholder="name"
        />
      </div>
      <div class="base-submit">
        <RouteButton button-text="Join Game" :route-target="target">
        </RouteButton>
      </div>
    </div>
  </div>
</template>
<script>
import RouteButton from "@/components/RouteButton.vue";

export default {
  components: { RouteButton },
  name: "JoinGame",

  data: function() {
    return {
      roomID: "",
      name: ""
    };
  },
  computed: {
    target: function() {
      return "play/" + this.roomID + '/' + this.name;
    }
  },
  mounted() {
    this.roomID = this.$store.state.roomInformation.roomID;
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex: 6;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 5%;
  .avatar {
    height: 75%;
    width: 60%;
    margin-bottom: 5%;
    background-color: lightblue;
  }
  .game-id-button {
    width: 100%;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid blue;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 12px 20px;
    background-color: lightblue;
    &:hover {
      box-shadow: 0px 0px 1px 1px blue;
    }
  }
}
</style>

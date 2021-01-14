import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import CreateGame from "@/views/CreateGame.vue";
import JoinGame from "@/views/JoinGame.vue";
import Instructions from "@/views/Instructions.vue";
import Play from "@/views/Play.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/create",
    name: "CreateGame",
    component: CreateGame
  },
  {
    path: "/join",
    name: "JoinGame",
    component: JoinGame
  },
  {
    path: "/instructions",
    name: "Instructions",
    component: Instructions
  },
  {
    path: "/play/:channel",
    name: "Play",
    component: Play
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

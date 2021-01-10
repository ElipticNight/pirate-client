import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        setup: {
            active: null,
            activeValue: null,
            availablePoints: {}
        },
        play: {
            gameGridValues: {}
        },
    },
    mutations: {
        setActive(state, value) {
            state.setup.active = value;
        },
        setActiveValue(state, value) {
            state.setup.activeValue = value;
        },
        incrementAvailablePoints(state, points) {
            state.setup.availablePoints[points] ++;
        },
        decrementAvailablePoints(state, points) {
            state.setup.availablePoints[points] --;
        },
        storeGameGridValue(state, payload) {
            state.play.gameGridValues[payload[0]] = payload[1];
        }
    }
})
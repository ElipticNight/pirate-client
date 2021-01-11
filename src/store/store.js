import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        setup: {
            active: null,
            activeValue: null,
            availablePointsActions: {
                200: 25,
                1000: 10,
                3000: 3,
                5000: 1,
                "A": 1,
                "B": 1,
                "C": 1,
                "D": 1,
                "E": 1,
                "F": 1,
                "G": 1,
                "H": 1
            }
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
        incrementAvailablePointsActions(state, value) {
            state.setup.availablePointsActions[value] ++;
        },
        decrementAvailablePointsActions(state, value) {
            state.setup.availablePointsActions[value] --;
        },
        storeGameGridValue(state, payload) {
            state.play.gameGridValues[payload[0]] = payload[1];
        }
    }
})
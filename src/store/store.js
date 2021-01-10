import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        setup: {
            active: null,
            activeValue: null,
            availablePoints: {},
            availableActions: {
                4: "A",
                5: "B",
                6: "C",
                7: "D",
                8: "E",
                9: "F",
                10: "G",
                11: "H"
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
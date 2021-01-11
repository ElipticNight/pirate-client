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
                "rob": 1,
                "Gift": 1,
                "Skull": 1,
                "Swap": 1,
                "Choose": 1,
                "Shield": 1,
                "Mirror": 1,
                "Bomb": 1,
                "Double": 1,
                "Bank": 1
            }
        },
        play: {
            gameGridValues: new Array(50).fill(null)
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
        },
        randomiseGameGridValues(state) {
            var tempGameValues = [];
            var availablePointsActions = state.setup.availablePointsActions
            for (var key in availablePointsActions) {
                for (let i = 0; i < availablePointsActions[key]; i++) {
                    tempGameValues.push(key);
                }
                //
            }
            let randomIndex;
            let randomValue;
            let length = tempGameValues.length;
            for (let index = 0; index < length; index++) {
                randomIndex = Math.floor(Math.random() * (49 - index));
                randomValue = tempGameValues[randomIndex];
                tempGameValues.splice(randomIndex, 1);
                Vue.set(state.play.gameGridValues, index, randomValue);
                state.setup.availablePointsActions[randomValue] --;
            }
            console.log(state.play.gameGridValues);
        }
    }
})
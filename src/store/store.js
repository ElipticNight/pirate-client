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
            Vue.set(state.play.gameGridValues, payload[0] - 1, payload[1]);
        },
        randomiseGameGridValues(state) {
            var tempGameValues = [];
            var availablePointsActions = state.setup.availablePointsActions
            for (var key in availablePointsActions) {
                for (let i = 0; i < availablePointsActions[key]; i++) {
                    tempGameValues.push(key);
                }
            }

            let randomIndex;
            let randomValue;
            let length = tempGameValues.length;
            let i = 0;
            
            console.log(tempGameValues);
            while (i < length) {
                randomIndex = Math.floor(Math.random() * (length - i));
                randomValue = tempGameValues[randomIndex];
                tempGameValues.splice(randomIndex, 1);
                while (state.play.gameGridValues[i] !== null) {
                    i++;
                    length++;
                }
                Vue.set(state.play.gameGridValues, i, randomValue);
                state.setup.availablePointsActions[randomValue] --;
                
                i++;
                console.log(i, randomValue);
            }
        }
    }
})

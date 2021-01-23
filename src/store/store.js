import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        setup: {
            active: null,
            activeValue: null,
            basePointsActions: {
                200: null,
                1000: null,
                3000: null,
                5000: null,
                "rob": null,
                "Gift": null,
                "Skull": null,
                "Swap": null,
                "Choose": null,
                "Shield": null,
                "Mirror": null,
                "Bomb": null,
                "Double": null,
                "Bank": null
            },
            availablePointsActions: {
                200: 0,
                1000: 0,
                3000: 0,
                5000: 0,
                "rob": 0,
                "Gift": 0,
                "Skull": 0,
                "Swap": 0,
                "Choose": 0,
                "Shield": 0,
                "Mirror": 0,
                "Bomb": 0,
                "Double": 0,
                "Bank": 0
            }
        },
        play: {
            gameGridValues: new Array(50).fill(null),
            socket: null,
        },
    },
    mutations: {
        setDefaultBasePointsActions(state, size) {
            if(size === 7) {
                state.setup.basePointsActions[200] = 25;
                state.setup.basePointsActions[1000] = 10;
                state.setup.basePointsActions[3000] = 3;
                state.setup.basePointsActions[5000] = 1;
                state.setup.basePointsActions["rob"] = 1;
                state.setup.basePointsActions["Gift"] = 1;
                state.setup.basePointsActions["Skull"] = 1;
                state.setup.basePointsActions["Swap"] = 1;
                state.setup.basePointsActions["Choose"] = 1;
                state.setup.basePointsActions["Shield"] = 1;
                state.setup.basePointsActions["Mirror"] = 1;
                state.setup.basePointsActions["Bomb"] = 1;
                state.setup.basePointsActions["Double"] = 1;
                state.setup.basePointsActions["Bank"] = 1;
            }
        },
        setCustomBasePointsActions() {
            //
        },
        setAvailablePointsActionsToBase(state) {
            Object.assign(state.setup.availablePointsActions, state.setup.basePointsActions);
        },
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
        randomiseRemainingGameGridValues(state) {
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
            }
        },
        clearGameGridValues(state) {
            for (var i = 0; i < state.play.gameGridValues.length; i++) {
                Vue.set(state.play.gameGridValues, i, null);
            }
        }
    }
})

import updateTimerState from './timer-state';
import updateTimerSettings from './timer-settings';

let date = new Date(0, 0, 0, 0, 25, 0, 0);

const initialState = {
    timerState: {
        timeRemain: date,
        isActive: false,
        isWorkMode: true,
        currentSessionNum: 0
    },
    timerSettings: {
        sessionDuration: 25,
        shortRestDuration: 5,
        longRestDuration: 15,
        longRestPeriodicity: 4,
        sound: null
    }
};

const reducer = (state = initialState, action) => {
    return {
        timerState: updateTimerState(state, action),
        timerSettings: updateTimerSettings(state, action)
    };
};

export default reducer;
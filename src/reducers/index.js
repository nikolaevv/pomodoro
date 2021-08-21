import updateTimerState from './timer-state';
import updateTimerSettings from './timer-settings';

const reducer = (state, action) => {
    return {
        timerState: updateTimerState(state, action),
        timerSettings: updateTimerSettings(state, action)
    };
};

export default reducer;
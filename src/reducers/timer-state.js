const decrementTime = (timeRemain, isWorkMode, isActive, currentSessionNum, settings) => {
    const {sessionDuration, shortRestDuration, longRestDuration, longRestPeriodicity, sound} = settings;

    const minutes = timeRemain.getMinutes();
    const seconds = timeRemain.getSeconds() - 1;

    if (minutes === 0 && seconds === 0) {
        isActive = false;
        
        if (isWorkMode === true) {
            let restDuration = shortRestDuration;

            if (currentSessionNum === longRestPeriodicity - 1) {
                currentSessionNum = 0;
                restDuration = longRestDuration;
            } else {
                currentSessionNum += 1;
            }

            timeRemain = new Date(0, 0, 0, 0, 0, restDuration, 0);
        }

        else {
            timeRemain = new Date(0, 0, 0, 0, 0, sessionDuration, 0);
        }

        isWorkMode = !isWorkMode;
        
    } else {
        if (isActive) {
            timeRemain = new Date(0, 0, 0, 0, minutes, seconds, 0);
        }
    }

    return {
        timeRemain,
        isWorkMode,
        currentSessionNum,
        isActive
    }
};

const updateTimerState = (state = initialState, action) => {
    
    const {timeRemain, isWorkMode, currentSessionNum, isActive} = state.timerState;

    switch (action.type) {
        case 'DECREMENT_TIME':
            return decrementTime(timeRemain, isWorkMode, isActive, currentSessionNum, state.timerSettings);

        case 'UPDATE_TIMER_SETTINGS':
            return {
                ...state.timerState,
                timeRemain: new Date(0, 0, 0, 0, 0, state.timerSettings.sessionDuration, 0)
            };

        case 'INVERT_TIMER_ACTIVITY':
            return {
                ...state.timerState,
                isActive: !isActive
            };
        
        default:
            return state.timerState;
    }
};

export default updateTimerState;
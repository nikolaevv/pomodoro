const decrementTime = (recentTime, recentMode, isNowActive, recentSessionNum) => {
    const minutes = recentTime.getMinutes();
    const seconds = recentTime.getSeconds() - 1;

    if (minutes === 0 && seconds === 0) {
        isNowActive = false;
        
        if (isWorkMode === true) {
            let restDuration = shortRestDuration;

            if (currentSessionNum === longRestPeriodicity - 1) {
                recentSessionNum = 0;
                restDuration = longRestDuration;
            }

            recentTime = new Date(0, 0, 0, 0, restDuration, 0, 0);
        }

        else {
            recentTime = new Date(0, 0, 0, 0, sessionDuration, 0, 0);
        }

        recentMode = !isWorkMode;
        
    } else {
        if (isNowActive) {
            recentTime = new Date(0, 0, 0, 0, minutes, seconds, 0);
        }
        
    }

    return {
        timeRemain: recentTime,
        isWorkMode: recentMode,
        currentSessionNum: recentSessionNum,
        isActive: isNowActive
    }
};

const updateTimerState = (state = initialState, action) => {
    const {sessionDuration, shortRestDuration, longRestDuration, longRestPeriodicity, sound} = state.timerSettings;
    const {timeRemain, isWorkMode, currentSessionNum, isActive} = state.timerState;

    switch (action.type) {
        case 'DECREMENT_TIME':
            return decrementTime(timeRemain, isWorkMode, isActive, currentSessionNum);

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
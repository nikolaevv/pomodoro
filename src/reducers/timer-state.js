const updateTimerState = (state = initialState, action) => {
    const {sessionDuration, shortRestDuration, longRestDuration, longRestPeriodicity, sound} = state.timerSettings;

    switch (action.type) {
        case 'DECREMENT_TIME':
            const {timeRemain, isWorkMode, currentSessionNum, isActive} = state.timerState;

            const minutes = timeRemain.getMinutes();
            const seconds = timeRemain.getSeconds() - 1;

            let recentTime = timeRemain;
            let recentMode = isWorkMode;
            let isNowActive = isActive;
            let recentSessionNum = currentSessionNum;

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
                if (isActive) {
                    recentTime = new Date(0, 0, 0, 0, minutes, seconds, 0);
                }
                
            }

            return {
                ...state.timerState,
                timeRemain: recentTime,
                isWorkMode: recentMode,
                currentSessionNum: recentSessionNum,
                isActive: isNowActive
            }
        
        default:
            return state.timerState;
    }
};

export default updateTimerState;
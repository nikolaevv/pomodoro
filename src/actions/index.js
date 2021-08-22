const decrementTime = () => {
    return {
        type: 'DECREMENT_TIME'
    };
};

const invertTimerActivity = () => {
    return {
        type: 'INVERT_TIMER_ACTIVITY'
    };
};

const changeSetting = (setting) => {
    return {
        type: 'CHANGE_SETTING',
        payload: setting
    };
};

const updateTimerSettings = () => {
    return {
        type: 'UPDATE_TIMER_SETTINGS',
    };
};

export {
    decrementTime,
    invertTimerActivity,
    changeSetting,
    updateTimerSettings
};
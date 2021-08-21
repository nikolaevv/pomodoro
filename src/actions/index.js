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

export {
    decrementTime,
    invertTimerActivity
};
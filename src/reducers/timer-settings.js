const updateTimerSettings = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_SETTING':
            console.log(Object.assign(state.timerSettings, action.payload))
            return Object.assign(state.timerSettings, action.payload);

        default:
            return state.timerSettings;
    }
};

export default updateTimerSettings;
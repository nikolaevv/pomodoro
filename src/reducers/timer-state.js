let date = new Date()
date.setMinutes(25)
date.setHours(0)
date.setSeconds(0)

const initialState = {
    timeRemain: date,
    isActive: false,
    mode: "work",
    currentSessionNum: 0
};

const updateTimerState = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default updateTimerState;
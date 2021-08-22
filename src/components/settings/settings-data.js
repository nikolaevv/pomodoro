import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeSetting, updateTimerSettings} from '../../actions';

const convertValueToNum = (value) => {
    if (value === "") {
        return 0;
    }

    return parseInt(value);
};

const settingsData = () => {
    const {sessionDuration, shortRestDuration, longRestDuration, longRestPeriodicity} = useSelector((state) => state.timerSettings);
    const dispatch = useDispatch();

    return (
        [
            {
                title: "Длительность рабочей сессии",
                shortAction: "Введите длительность",
                value: sessionDuration,
                action: "Введите время в минутах",
                onValueChanged: (e) => {
                    dispatch(changeSetting({sessionDuration: convertValueToNum(e.target.value)}));
                    dispatch(updateTimerSettings());
                },
            },
            {
                title: "Длительность короткого перерыва",
                shortAction: "Введите длительность",
                value: shortRestDuration,
                action: "Введите время в минутах",
                onValueChanged: (e) => {
                    dispatch(changeSetting({shortRestDuration: convertValueToNum(e.target.value)}));
                },
            },
            {
                title: "Длительность длинного перерыва",
                shortAction: "Введите длительность",
                value: longRestDuration,
                action: "Введите время в минутах",
                onValueChanged: (e) => {
                    dispatch(changeSetting({longRestDuration: convertValueToNum(e.target.value)}));
                },
            },
            {
                title: "Частота длинных перерывов",
                shortAction: "Введите число",
                value: longRestPeriodicity,
                action: "Длинные перерывы раз за N сессий",
                onValueChanged: (e) => {
                    dispatch(changeSetting({longRestPeriodicity: convertValueToNum(e.target.value)}));
                },
            },
        ]
    );
};

export default settingsData;
import React, {useEffect, useState} from 'react';

import SettingsIcon from '@material-ui/icons/Settings';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import {decrementTime, invertTimerActivity} from '../../actions';
import {
    Card, 
    CardContent, 
    Typography, 
    CardActions, 
    Button, 
    IconButton
} from '@material-ui/core';

import {useSelector, useDispatch} from 'react-redux';
import useStyles from './timer-styles';
import './timer.scss';

const Timer = () => {
    const {timeRemain, isActive, isWorkMode, currentSessionNum} = useSelector((state) => state.timerState);
    const actionTitle = isActive ? "Пауза" : "Начать";
    const mode = isWorkMode ? "В работе" : "Отдых";

    const classes = useStyles();
    const dispatch = useDispatch();

    const onMainButtonClick = () => {
        if (isActive) {
            //setActionTitle("Продолжить");
        } else {
            //setActionTitle("Пауза")
        }

        dispatch(invertTimerActivity());
    };

    useEffect(() => {
        setInterval(() => dispatch(decrementTime()), 1000)
    }, []);

    return (
        <Card className={`timer-card--${isWorkMode}`}>
            <CardContent>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>

                <div className={classes.time}>
                    <Typography variant="h6">
                        {mode}
                    </Typography>

                    <Typography variant="h1">
                        {timeRemain.toLocaleTimeString().slice(3)}
                    </Typography>
                </div>
            </CardContent>

            <CardActions className={classes.actions}>
                <Button onClick={onMainButtonClick} className={classes.action} size="small">{actionTitle}</Button>
            </CardActions>
        </Card>
    );
};

export default Timer;
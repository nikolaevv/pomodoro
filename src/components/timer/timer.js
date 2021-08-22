import React, {useEffect, useState, useLayoutEffect} from 'react';
import useSound from 'use-sound';
import sound from './sound.mp3';
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
import {withRouter} from 'react-router';

const Timer = ({history}) => {
    const {timeRemain, isActive, isWorkMode} = useSelector((state) => state.timerState);
    const [play] = useSound(sound);
    const actionTitle = isActive ? "Пауза" : "Начать";
    const mode = isWorkMode ? "В работе" : "Отдых";

    const classes = useStyles();
    const dispatch = useDispatch();

    const onMainButtonClick = () => {
        dispatch(invertTimerActivity());
    };

    useLayoutEffect(() => {
        play();
    }, [isWorkMode]);

    useEffect(() => {
        let timerId = setInterval(() => dispatch(decrementTime()), 1000);
        return () => clearInterval(timerId);
    }, []);

    return (
        <Card className={`timer-card--${isWorkMode}`}>
            <CardContent>
                <IconButton onClick={() => history.push('/settings')}>
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

export default withRouter(Timer);
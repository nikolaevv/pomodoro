import React, {useEffect} from 'react';

import SettingsIcon from '@material-ui/icons/Settings';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import {decrementTime} from '../../actions';
import {
    Card, 
    CardContent, 
    Typography, 
    CardActions, 
    Button, 
    IconButton
} from '@material-ui/core';

import {useSelector, useDispatch} from 'react-redux';
import useStyles from './main-styles';
import './timer.css';

const Timer = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const {timeRemain, isActive, mode, currentSessionNum} = useSelector((state) => state.timerState);

    useEffect(() => {
        setInterval(() => dispatch(decrementTime()), 1000)
    }, []);

    return (
        <Card className={classes.root}>
            <CardContent>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>

                <div className={classes.time}>
                    <Typography variant="h1">
                        {timeRemain.toLocaleTimeString().slice(3)}
                    </Typography>
                </div>
            </CardContent>

            <CardActions className={classes.actions}>
                <Button className={classes.action} size="small">Начать</Button>
            </CardActions>
        </Card>
    );
};

export default Timer;
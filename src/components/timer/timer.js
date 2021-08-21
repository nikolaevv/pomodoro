import React from 'react';

import SettingsIcon from '@material-ui/icons/Settings';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import {
    Card, 
    CardContent, 
    Typography, 
    CardActions, 
    Button, 
    IconButton
} from '@material-ui/core';
import useStyles from './main-styles';
import './timer.css';

const Timer = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>

                <div className={classes.time}>
                    <Typography variant="h1">
                        25:00
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
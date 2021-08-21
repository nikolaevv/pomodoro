import {
    Container, 
    Card, 
    CardContent, 
    Typography, 
    CardActions, 
    Button, 
    IconButton
} from '@material-ui/core';

import SettingsIcon from '@material-ui/icons/Settings';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FaqBlock from '../faq-block';

import React from 'react';
import useStyles from './main-styles';

import './main-page.css';

const MainPage = () => {
    const classes = useStyles();

    return (
        <Container>
            <div className="main">
                <Card className={classes.root}>
                    <CardContent>
                        <IconButton>
                            <SettingsIcon/>
                        </IconButton>

                        <div className={classes.time}>
                            <Typography variant="h1" component="h2">
                                25:00
                            </Typography>
                        </div>
                    </CardContent>

                    <CardActions className={classes.actions}>
                        <Button lassName={classes.action} size="small">Начать</Button>
                    </CardActions>
                </Card>

                <FaqBlock/>
            </div>
        </Container>
    );
};

export default MainPage;
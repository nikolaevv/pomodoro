import {
    Container, 
    Card, 
    CardContent, 
    Typography, 
    CardActions, 
    Button, 
    IconButton
} from '@material-ui/core';

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
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            beent
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>

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
            </div>
        </Container>
    );
};

export default MainPage;
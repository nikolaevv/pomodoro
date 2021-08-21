import React from 'react';
import {Link} from 'react-router-dom';

import useStyles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Container} from '@material-ui/core';
import './header.css';
import logo from './main-logo.png';

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Container>
                    <Toolbar>
                        <Link to="/">
                            <img className="logo" alt="logo" src={logo}/>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Header;
import React from 'react';

import {
    Container
} from '@material-ui/core';
import FaqBlock from '../faq-block';
import Timer from '../timer';
import './main-page.css';

const MainPage = () => {
    return (
        <Container>
            <div className="main">
                <Timer/>
                <FaqBlock/>
            </div>
        </Container>
    );
};

export default MainPage;
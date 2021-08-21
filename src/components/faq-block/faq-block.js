import React from 'react';
import blocksData from './data';

import {
    Typography, 
} from '@material-ui/core';
import './faq-block.css';

const FaqBlock = () => {
    return (
        <div className="faq-block">
            {
                blocksData.map((item) => {
                    return (
                        <div className="faq-item">
                            <Typography className="text-block-title" variant="h5" component="h5">
                                {item.question}
                            </Typography>

                            {
                                item.answer.map((paragraph) => {
                                    return (
                                        <React.Fragment>
                                            <Typography variant="body2" component="body2">
                                                {paragraph}
                                            </Typography>
                                            <br/>
                                        </React.Fragment>
                                    );
                                })
                            }
                            
                        </div>
                    );
                })
            }
        </div>
    );
};

export default FaqBlock;
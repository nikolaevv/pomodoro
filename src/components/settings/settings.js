import React from 'react';
import useStyles from './settings-styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import {
    IconButton
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import settingsData from './settings-data';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {withRouter} from 'react-router';

const SettingsItem = ({itemData, styleClasses}) => {
    const {title, shortAction, value, action, onValueChanged} = itemData;

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
                >
                <div className={styleClasses.column}>
                    <Typography className={styleClasses.heading}>{title}</Typography>
                </div>

                <div className={styleClasses.column}>
                    <Typography className={styleClasses.secondaryHeading}>{shortAction}</Typography>
                </div>
            </AccordionSummary>

            <AccordionDetails className={styleClasses.details}>
                <div className={styleClasses.column} />
                <div className={styleClasses.column}>                        
                    <TextField
                        id="standard-number"
                        label="Длительность"
                        type="number"
                        onChange={onValueChanged}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        defaultValue={value || 0}
                    />
                </div>
                <div className={clsx(styleClasses.column, styleClasses.helper)}>
                    <Typography variant="caption">
                        {action}
                        <br/>
                    </Typography>
                </div>
            </AccordionDetails>
            <Divider/>
        </Accordion>
    );
};

const Settings = ({history}) => {
    const styleClasses = useStyles();
    const data = settingsData();

    return (
        <div className={styleClasses.root}>
            <div onClick={() => history.push('/')} className={styleClasses.backBlock}>
                <IconButton className={styleClasses.backButton}>
                    <KeyboardBackspaceIcon color="secondary"/>
                </IconButton>

                <Typography variant="h6" color="secondary">
                    Главная
                </Typography>
            </div>
            
            <div >
                {
                    data.map((itemData, idx) => <SettingsItem key={idx} itemData={itemData} styleClasses={styleClasses}/>)
                }

            </div>
        </div>
    );
};

export default withRouter(Settings);
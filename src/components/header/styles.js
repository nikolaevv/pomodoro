import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    appBar: {
        background: '#2d3436 !important',
        boxShadow: 'none !important',
        paddingTop: theme.spacing(1),
        paddingLeft: 0,
        paddingBottom: theme.spacing(1),
    },
    menuButton: {
        marginRight: theme.spacing(0),
    },
    title: {
        flexGrow: 1,
    },
}));

export default useStyles;
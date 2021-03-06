import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    actions: {
      justifyContent: "center",
      paddingBottom: "1.5em"
    },
    action: {
      color: "#FFF"
    },
    time: {
      textAlign: "center",
      justifyContent: "center",
    }
});

export default useStyles;
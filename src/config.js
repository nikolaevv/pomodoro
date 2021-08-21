import {createTheme} from '@material-ui/core/styles';

const theme = createTheme({
	palette: {
		type: 'dark',
        primary: {
            main: '#FFF',
            contrastText: '#FFF',
            light: '#FFF',
            dark: '#FFF',
        },
        secondary: {
            main: '#bdc3c7',
            contrastText: '#bdc3c7',
            light: '#bdc3c7',
            dark: '#bdc3c7',
        }
	},
});

export {theme};
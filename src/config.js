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
            main: '#2c3e50',
            contrastText: '#2c3e50',
            light: '#2c3e50',
            dark: '#2c3e50',
        }
	},
});

export {theme};
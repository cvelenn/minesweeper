import { DefaultTheme, makeStyles } from '@mui/styles';

export interface FiledCSSProps {
    marked: boolean;
}

export const useStyles = makeStyles<DefaultTheme, FiledCSSProps>((theme) => ({
    field: prop => ({        
        '&:hover': {
            background: prop.marked ? '#aa0000' : 'lightblue',
        },
        background: prop.marked ? '#FF0000' : '',
    }),
    common: {
        cursor: 'pointer',
        display: 'inline-flex',
        border: '1px solid',
    }
}));

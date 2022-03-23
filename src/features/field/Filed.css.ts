import { DefaultTheme, makeStyles } from '@mui/styles';

export interface FiledCSSProps {
    marked: boolean;
}

export const useStyles = makeStyles<DefaultTheme, FiledCSSProps>((theme) => ({
    field: prop => ({
        cursor: 'pointer',
        display: 'inline-flex',
        border: '1px solid',
        '&:hover': {
            background: prop.marked ? '#aa0000' : 'lightblue',
        },
        background: prop.marked ? '#FF0000' : '',
    })
}));

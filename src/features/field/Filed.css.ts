import { makeStyles } from '@mui/styles';

export interface FiledCSSProps {
    marked: boolean;
}

export const useStyles = makeStyles((theme) => ({
    field: {
        cursor: 'pointer',
        display: 'inline-flex',
        border: '1px solid',
        '&:hover': {
            background: 'lightblue',
        },
    },
    marked: {
        '&:hover': {
            background: 'aa0000',
        },
        background: '#FF0000'
    }
}));

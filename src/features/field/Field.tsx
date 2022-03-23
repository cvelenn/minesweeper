import React, { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import { useAppDispatch } from '../../app/hooks';
import { useStyles } from './Filed.css';

export interface FieldProps {
    row: number;
    col: number;
    c: string;
}

export function Field(props: FieldProps) {
  const {col, row, c} = props;
  const dispatch = useAppDispatch();
  const [marked, setMarked] = useState(false);
  const classes = useStyles({marked});

  const click = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.button === 2) {
      setMarked(!marked);
    } else if (!marked) {    
      dispatch({type: 'COMMAND', payload: `open ${col} ${row - 1}` });
    }
  }

  const getFiled = () => {
    return <Box 
      sx={{ height: '20px', width: '20px' }}
      className={classes.field}
      onContextMenu={click} 
      onClick={e => !marked && click(e)}>{c}
    </Box>
  }
  const getMemoFiled = useMemo(() => getFiled(), [marked, c]);

  return (
    <>
        {getMemoFiled}
    </>
  );
}

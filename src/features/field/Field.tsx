import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useAppDispatch } from '../../app/hooks';

export interface FieldProps {
    row: number;
    col: number;
    c: string;
}

export function Field(props: FieldProps) {
  const {col, row, c} = props;
  const dispatch = useAppDispatch();
  const [marked, setMarked] = useState(false);

  const click = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.button === 2) {
        setMarked(!marked);
    } else if (!marked) {    
        dispatch({type: 'COMMAND', payload: `open ${col} ${row - 1}` });
    }
  }

  return (
    <>
        {!marked ? 
            <Box 
                sx={{ bgcolor: '#cfe8fc', height: '20px', width: '20px' }}
                className="field"
                onContextMenu={click} 
                onClick={e => click(e)}>{c === '□' ? '?' : c}
            </Box>
            :
            <Box 
                sx={{ bgcolor: 'red', height: '20px', width: '20px' }}
                className="field"
                onContextMenu={click} 
                color="error">{c === '□' ? '?' : c}
            </Box>
        }
    </>
  );
}

import React, { useState } from 'react';
import Box from '@mui/material/Box';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  executeCommand,
  selectMap,
  selectLoading,
  setLoading
} from './mapSlice';
import styles from './Counter.module.css';

export function Counter() {
  const dispatch = useAppDispatch();
  const map = useAppSelector(selectMap);
  const [marked, setMarked] = useState(new Map());
  const loadnig = useAppSelector(selectLoading);

  const click = (e: React.MouseEvent<HTMLDivElement>, row: number, col: number) => {
    e.preventDefault();
    console.log(row, col);
    const index: string = `${row}-${col}`;
    if (e.button === 2) {
        const copy= new Map(marked);
        copy.set(index, !marked.get(index));
        setMarked(copy);
    } else if (!marked.get(index) && !loadnig) {
        dispatch(setLoading(true));
        dispatch(executeCommand(`open ${col} ${row - 1}`));
    }
  }

  return (
    <div>
      {map.map((line, row) => {
          return <div className='row'>{line.map((c, col) => {
            if (!marked.get(`${row}-${col}`)) {
              return <Box 
                sx={{ bgcolor: '#cfe8fc', height: '20px', width: '20px' }}
                className="field"
                onContextMenu={e => click(e, row, col)} 
                onClick={e => click(e, row, col)}>{c === '□' ? '?' : c}
              </Box>
            } else {
                return <Box 
                  sx={{ bgcolor: 'red', height: '20px', width: '20px' }}
                  className="field"
                  onContextMenu={e => click(e, row, col)} 
                  color="error">{c === '□' ? '?' : c}
              </Box>
            }
          })}</div>
      })}
      {loadnig ? 'loading' : ''}
    </div>
  );
}

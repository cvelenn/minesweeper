import React, { useState } from 'react';
import Button from '@mui/material/Button';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  executeCommand,
  selectMap,
  selectLoading,
  setLoading
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const dispatch = useAppDispatch();
  const map = useAppSelector(selectMap);
  const [marked, setMarked] = useState(new Map());
  const loadnig = useAppSelector(selectLoading);

  const click = (e: React.MouseEvent<HTMLButtonElement>, row: number, col: number) => {
    e.preventDefault();
    console.log(row, col);
    const index: string = `${row}-${col}`;
    if (e.button === 2) {
        const copy= new Map(marked);
        copy.set(index, !marked.get(index));
        setMarked(copy);
    } else if (!marked.get(index)) {
        dispatch(setLoading(true));
        dispatch(executeCommand(`open ${col} ${row - 1}`));
    }
  }

  return (
    <div>
      {map.map((line, row) => {
          return <div className='row'>{line.map((c, col) => {
            if (!marked.get(`${row}-${col}`)) {
              return <Button 
                disabled={loadnig}
                variant="outlined"
                className="field"
                onContextMenu={e => click(e, row, col)} 
                onClick={e => click(e, row, col)}>{c === '□' ? '' : c}
              </Button>
            } else {
                return <Button 
                variant="contained" 
                className="field"
                onContextMenu={e => click(e, row, col)} 
                color="error">{c === '□' ? '' : c}
              </Button>
            }
          })}</div>
      })}
      {loadnig ? 'loading' : ''}
    </div>
  );
}

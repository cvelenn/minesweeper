import React, {useState} from 'react';
import { useAppSelector } from '../../app/hooks';
import {
  selectMap,
  selectLoading,
  selectRestarted
} from './mapSlice';
import { selectTheme } from '../menu/themeSlice';
import { Field } from './Field';

export function Map() {
  const map = useAppSelector(selectMap);
  const loadnig = useAppSelector(selectLoading);
  const restarted = useAppSelector(selectRestarted);
  const theme = useAppSelector(selectTheme);
  let lost = false;
  let won = true;

  const game = map.map((line, row) => {
    return <div key={`row-${row}`} className='row'>{line.map((c, col) => {
      if (c === '*') {
        lost = true;
      }
      if (won && c === '□') {
        won = false;
      }
      return <Field theme={theme} restarted={restarted} row={row} col={col} c={c} key={`${row}-${col}`} />
    })}</div>
  });

  return (
    <div>
      {game}
      {(loadnig && !lost && !won) && <div>loading</div>}
      {(!won && lost && map.length > 1) && <div>you have lost</div>}
      {(won && map.length > 1) && <div>you have won</div>}
    </div>
  );
}

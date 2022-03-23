import React from 'react';

import { useAppSelector } from '../../app/hooks';
import {
  selectMap,
  selectLoading,
  selectRestarted
} from './mapSlice';
import { selectTheme } from '../menu/themeSlice';
import { Field } from '../field/Field';

export function Map() {
  const map = useAppSelector(selectMap);
  const loadnig = useAppSelector(selectLoading);
  const restarted = useAppSelector(selectRestarted);
  const theme = useAppSelector(selectTheme);

  return (
    <div>
      {map.map((line, row) => {
          return <div className='row'>{line.map((c, col) => {
            return <Field theme={theme} restarted={restarted} row={row} col={col} c={c} key={`${row}-${col}`} />
          })}</div>
      })}
      {loadnig ? 'loading' : ''}
    </div>
  );
}

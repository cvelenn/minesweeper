import React, { useState } from 'react';

import { useAppSelector } from '../../app/hooks';
import {
  selectMap,
  selectLoading
} from './mapSlice';
import styles from './Counter.module.css';
import { Field } from '../field/Field';

export function Map() {
  const map = useAppSelector(selectMap);
  const loadnig = useAppSelector(selectLoading);

  return (
    <div>
      {map.map((line, row) => {
          return <div className='row'>{line.map((c, col) => {
            return <Field row={row} col={col} c={c} key={`${row}-${col}`} />
          })}</div>
      })}
      {loadnig ? 'loading' : ''}
    </div>
  );
}

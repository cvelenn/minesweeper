import React from 'react';
import Switch from '@mui/material/Switch';
import { useAppDispatch } from '../../app/hooks';
import { setTheme } from '../menu/themeSlice';

export interface ThemeProps {
    value: boolean;
    callback: Function
}

export function Theme(props: ThemeProps) {
  const dispatch = useAppDispatch();
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.callback(!props.value);
    dispatch(setTheme());
  }
  return (
    <>
        <div>Change Theme</div>
        <div>
            <Switch checked={props.value} onChange={change}/> {props.value ? 'dark' : 'light'}
        </div>
    </>
  );
}


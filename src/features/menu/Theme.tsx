import React from 'react';
import Switch from '@mui/material/Switch';

export interface ThemeProps {
    value: boolean;
    callback: Function
}

export function Theme(props: ThemeProps) {

  return (
    <>
        <div>Change Theme</div>
        <div>
            <Switch checked={props.value} onChange={_ => props.callback(!props.value)}/> {props.value ? 'dark' : 'light'}
        </div>
    </>
  );
}


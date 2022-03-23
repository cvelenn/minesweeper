import React from 'react';
import Switch from '@mui/material/Switch';

export interface FieldProps {
    value: boolean;
    callback: Function
}

export function Menu(props: FieldProps) {

  return (
    <div>
        <div>Change Theme</div>
        <div>
            <Switch checked={props.value} onChange={_ => props.callback(!props.value)}/> {props.value ? 'dark' : 'light'}
        </div>
    </div>
  );
}


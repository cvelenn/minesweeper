import React from 'react';

export interface FieldProps {
    value: boolean;
    callback: Function
}

export function Menu(props: FieldProps) {

  return (
    <div>
      <input type="checkbox" checked={props.value} onChange={_ => props.callback(!props.value)} /> Change Theme
    </div>
  );
}


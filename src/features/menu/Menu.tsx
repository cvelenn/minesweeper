import React from 'react';
import {Theme, ThemeProps} from './Theme';
import {Size} from './Size';

export interface FieldProps {
    theme: ThemeProps
}

export function Menu(props: FieldProps) {

  return (
    <div>
        <Theme {...props.theme} />
        <Size />
    </div>
  );
}


import React from 'react';
import {Theme, ThemeProps} from './Theme';

export interface FieldProps {
    theme: ThemeProps
}

export function Menu(props: FieldProps) {

  return (
    <div>
        <Theme {...props.theme} />
    </div>
  );
}


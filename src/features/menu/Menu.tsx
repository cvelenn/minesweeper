import React from 'react';
import {Theme, ThemeProps} from './Theme';
import {Size} from './Size';
import Container from '@mui/material/Container';

export interface FieldProps {
    theme: ThemeProps
}

export function Menu(props: FieldProps) {

  return (
    <Container>
        <Theme {...props.theme} />
        <Size />
    </Container>
  );
}


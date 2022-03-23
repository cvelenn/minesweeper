import * as React from 'react';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import ws from '../../app/socket'

export interface SizeProps {
  value: boolean;
  callback: Function
}

export function Size() {
  const [selectedValue, setSelectedValue] = React.useState('1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    ws.send(`new ${event.target.value}`);
  };

  return (
    <div>
      <div>Game size</div>
      <div>
        <Radio
          checked={selectedValue === '1'}
          onChange={handleChange}
          value="1"
          name="radio-buttons"
        /> 1
        <Radio
          checked={selectedValue === '2'}
          onChange={handleChange}
          value="2"
          name="radio-buttons"
        /> 2
        <Radio
          checked={selectedValue === '3'}
          onChange={handleChange}
          value="3"
          name="radio-buttons"
        /> 3
        <Radio
          checked={selectedValue === '4'}
          onChange={handleChange}
          value="4"
          name="radio-buttons"
        /> 4
      </div>
      <Button variant="contained" onClick={_ => ws.send(`new ${selectedValue}`)}>Reset</Button>
    </div>
  );
}

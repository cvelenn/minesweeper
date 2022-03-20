import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { setMap, selectCommand, setLoading } from './features/counter/counterSlice';
import { useAppSelector, useAppDispatch } from './app/hooks';

const ws = new WebSocket("wss://hometask.eg1236.com/game1/");

ws.onopen = _ => {
    ws.send("new 1");
};

function App() {
  const dispatch = useAppDispatch();
  const command = useAppSelector(selectCommand);
  console.log(command);
  command && ws.send(command);

  ws.onmessage = function (event) {
    console.log(event);
    if (event && event.data) {
        if (event.data.startsWith('map:')) {
            const matrix: string[][] = [[]];
            const rows = event.data.split('map:\n')[1].split('\n');
            rows.map(function (row: string, index: number) {
              matrix.push(row.split(''));
            })
            dispatch(setMap(matrix));
            dispatch(setLoading(false));
        }
        event.data.startsWith('open:') && ws.send("map");
        event.data.startsWith('new:') && ws.send("map");
    }
  };

  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

import React, {useState} from "react";
import Container from '@mui/material/Container';
import './game.css';

const Game = ({ws}) => {
    const [map, setMap] = useState([[]]);
    const [marked, setMarked] = useState({});
    const [loading, setLoading] = useState(false);

    ws.onmessage = function (event) {
        console.log(event);
        if (event && event.data) {
            if (event.data.startsWith('map:')) {
                const matrix = [];
                const rows = event.data.split('map:\n')[1].split('\n');
                rows.map(row => {
                    matrix.push(row.split(''));
                })
                setMap(matrix);
                setLoading(false);
            }
            event.data.startsWith('open:') && ws.send("map");
            event.data.startsWith('new:') && ws.send("map");
        }
    };

    const click = (e, row, col) => {
        e.preventDefault();
        console.log(row, col);
        if (e.button === 2) {
            const copy = {...marked};
            copy[`${row}-${col}`] = !marked[`${row}-${col}`];
            setMarked(copy);
        } else if (!marked[`${row}-${col}`]) {
            setLoading(true); 
            ws.send(`open ${col} ${row}`);
        }
    }

    return <>
        <Container>
            {map.map((line, row) => {
                return <div className='row'>{line.map((c, col) => {
                    return <div 
                        onContextMenu={e => click(e, row, col)} 
                        className={`field ${marked[`${row}-${col}`] ? 'marked' : ''}`} 
                        onClick={e => click(e, row, col)}>{c === '□' ? '.' : c}
                    </div>
                })}</div>
            })}
        </Container>
        {loading && <div>Loading</div>}
    </>;
}

export default Game;
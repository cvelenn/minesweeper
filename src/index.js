import ReactDOM from "react-dom";
import React from "react";
import Game from './game';

const App = () => {
    const ws = new WebSocket("wss://hometask.eg1236.com/game1/");
    
    ws.onopen = _ => {
        ws.send("new 1");
    };
    
    return <>
        <Game ws={ws}/>
    </>;
}
ReactDOM.render(<App />, document.getElementById("app"));
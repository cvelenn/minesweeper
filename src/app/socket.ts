const ws = new WebSocket(process.env.REACT_APP_WEB_SOCKET_URL! || "wss://hometask.eg1236.com/game1/");

export default ws;
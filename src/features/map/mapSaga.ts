import { put, take, call } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { setMap, setLoading, setRestarted } from './mapSlice';
import ws from '../../app/socket';

function websocketInitChannel() {
    return eventChannel(emitter => {
        // init the connection here
        ws.onopen = _ => {
            ws.send("new 1");
        };
        ws.onmessage = e => {
            // dispatch an action with emitter here
            e.data.startsWith('open:') && ws.send("map");
            e.data.startsWith('new:') && ws.send("map");

            return emitter({data: e.data});
        }
        // unsubscribe function
        return () => {
        // do whatever to interrupt the socket communication here
        }
    })
}

export default function* mapSaga() {
    const channel = yield call(websocketInitChannel)
    while (true) {
        const event = yield take(channel)
        if (event && event.data && event.data.startsWith('new:')) {
            yield put(setRestarted());
        }
        if (event && event.data && event.data.startsWith('map:')) {
            const matrix: string[][] = [[]];
            const rows = event.data.split('map:\n')[1].split('\n');
            rows.map(function (row: string, index: number) {
            matrix.push(row.split(''));
            })
            yield put(setMap(matrix));
            yield put(setLoading(false));            
        }
    }
}

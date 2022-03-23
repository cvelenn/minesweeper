import { takeEvery, put } from 'redux-saga/effects';
import { setLoading } from '../../features/map/mapSlice';
import ws from '../../app/socket';

function* filedSaga(data: {type: 'COMMAND', payload: string}) {
    yield put(setLoading(true)); 
    yield ws.send(data.payload);
}

export default function* watchFiledSaga() {
    yield takeEvery('COMMAND', filedSaga)
}
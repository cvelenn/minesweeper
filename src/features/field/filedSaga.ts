import { takeEvery } from 'redux-saga/effects'
import ws from '../../app/socket';

function* filedSaga(data: {type: 'COMMAND', payload: string}) {
    yield ws.send(data.payload);
}

export default function* watchFiledSaga() {
    yield takeEvery('COMMAND', filedSaga)
}
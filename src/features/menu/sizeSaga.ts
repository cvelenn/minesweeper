import { takeEvery } from 'redux-saga/effects'
import ws from '../../app/socket';

function* sizeSaga(data: {type: 'SIZE', payload: string}) {
    yield ws.send(data.payload);
}

export default function* watchSizeSaga() {
    yield takeEvery('SIZE', sizeSaga)
}
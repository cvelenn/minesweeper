import { all } from 'redux-saga/effects'
import mapSaga from '../features/map/mapSaga';
import watchFiledSaga from '../features/field/filedSaga';

export default function* rootSaga() {
    yield all([
        mapSaga(),
        watchFiledSaga()
    ])
}
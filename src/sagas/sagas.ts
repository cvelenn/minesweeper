import { all } from 'redux-saga/effects'
import mapSaga from '../features/map/mapSaga';

export default function* rootSaga() {
    yield all([
        mapSaga()
    ])
}
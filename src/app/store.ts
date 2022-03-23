import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import mapReducer from '../features/map/mapSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    map: mapReducer
  },
  middleware: getDM => getDM().prepend(sagaMiddleware)
});
sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

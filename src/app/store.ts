import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/map/mapSlice';
import filedReducer from '../features/field/filedSlice';
import sizeReducer from '../features/menu/sizeSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    field: filedReducer,
    size: sizeReducer
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

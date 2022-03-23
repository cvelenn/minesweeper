import mapReducer, {
  MapState,
  // increment
} from './mapSlice';

describe('map reducer', () => {
  const initialState: MapState = {
    map: [[]],
    loading: false
  };
  it('should handle initial state', () => {
    expect(mapReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

});

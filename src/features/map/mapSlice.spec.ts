import mapReducer, {
  MapState,
  setMap
} from './mapSlice';

describe('map reducer', () => {
  const initialState: MapState = {
    map: [[]],
    loading: false,
    restarted: false,
  };
  it('should handle initial state', () => {
    expect(mapReducer(undefined, { type: 'unknown' })).toEqual({
      map: [[]],
      loading: false
    });
  });
  it('should handle setMap', () => {
    const actual = mapReducer(initialState, setMap([['a', 'b']]));
    expect(actual.map[0][0]).toEqual('a');
    expect(actual.map[0][1]).toEqual('b');
  });
});

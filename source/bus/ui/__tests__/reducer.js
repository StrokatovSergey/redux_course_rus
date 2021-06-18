import { Map } from "immutable";
import { uiReducer } from "../reducer";
import { uiActions } from "../actions";

const initialState = Map({
  isFetching: false,
  isOnline: false
});
//
// export const uiReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case types.START_FETCHING:
// 			return state.set('isFetching', true);
//
// 		case types.STOP_FETCHING:
// 			return state.set('isFetching', false );
//
// 		case types.SET_ONLINE_STATE:
// 			return state.set('isOnline', true );
//
// 		case types.SET_OFFLINE_STATE:
// 			return state.set('isOnline', false );
//
// 	}
// }

describe("ui reducer test", () => {
  it("should return default state", function() {
    expect(uiReducer(void 0, {})).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
}
`);
  });

  it("should handle setOfflineState", function() {
    expect(uiReducer(void 0, uiActions.setOfflineState()))
      .toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
}
`);
  });

  it("should handle setOnlineState", function() {
    expect(uiReducer(void 0, uiActions.setOnlineState()))
      .toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": true,
}
`);
  });

  it("should handle stopFetching", function() {
    expect(uiReducer(void 0, uiActions.stopFetching())).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
}
`);
  });

  it("should handle startFetching", function() {
    expect(uiReducer(void 0, uiActions.startFetching())).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": true,
  "isOnline": false,
}
`);
  });
});

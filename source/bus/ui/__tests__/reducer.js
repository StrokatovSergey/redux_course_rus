import { Map } from "immutable";
import { uiReducer } from "../reducer";
import { uiActions } from "../actions";

const initialState = Map({
  isFetching: false,
  isOnline: false
});

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

import { uiActions } from "../actions";

describe("actions profile", () => {
  it("should startFetching snapshot", function() {
    expect(uiActions.startFetching()).toMatchInlineSnapshot(`
Object {
  "type": "START_FETCHING",
}
`);
  });

  it("should stopFetching snapshot", function() {
    expect(uiActions.stopFetching()).toMatchInlineSnapshot(`
Object {
  "type": "STOP_FETCHING",
}
`);
  });

  it("should setOnlineState snapshot", function() {
    expect(uiActions.setOnlineState()).toMatchInlineSnapshot(`
Object {
  "type": "SET_ONLINE_STATE",
}
`);
  });

  it("should setOfflineState snapshot", function() {
    expect(uiActions.setOfflineState()).toMatchInlineSnapshot(`
Object {
  "type": "SET_OFFLINE_STATE",
}
`);
  });

  it("should setOfflineState snapshot", function() {
    expect(uiActions.emitError()).toMatchInlineSnapshot(`
Object {
  "error": true,
  "meta": null,
  "payload": undefined,
  "type": "EMIT_ERROR",
}
`);
  });
});

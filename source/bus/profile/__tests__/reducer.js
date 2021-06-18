import { profileReducer } from "../reducer";
import { profileActions } from "../actions";

describe("reducer profile test", () => {
  it("should return default state", function() {
    expect(profileReducer(void 0, {})).toMatchInlineSnapshot(`
Immutable.Map {
  "id": "",
  "firstName": "",
  "lastName": "",
  "avatar": "",
  "token": "",
}
`);
  });

  it("should handle FILL_PROFILE", function() {
    expect(profileReducer(void 0, profileActions.fillProfile(__.userProfile)))
      .toMatchInlineSnapshot(`
Immutable.Map {
  "id": "TEST_ID",
  "firstName": "Walter",
  "lastName": "White",
  "avatar": "TEST_AVATAR",
  "token": "TEST_TOKEN",
}
`);
  });

  it("should handle UPDATE_AVATAR", function() {
    expect(profileReducer(void 0, profileActions.updateAvatar(__.newAvatar)))
      .toMatchInlineSnapshot(`
Immutable.Map {
  "id": "",
  "firstName": "",
  "lastName": "",
  "avatar": Array [
    "avatar",
  ],
  "token": "",
}
`);
  });

  it("should handle CLEAR_PROFILE", function() {
    expect(
      profileReducer(void 0, profileActions.clearProfile())
    ).toMatchInlineSnapshot(`Immutable.Map {}`);
  });
});

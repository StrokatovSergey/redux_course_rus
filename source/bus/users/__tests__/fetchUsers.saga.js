import { apply, put } from "redux-saga/effects";
import { uiActions } from "../../ui/actions";
import { api } from "../../../REST";
import { authActions } from "../../auth/actions";
import { cloneableGenerator } from "redux-saga/utils";
import { signup } from "../../auth/saga/workers/signup";
import { usersActions } from "../actions";
import { fetchUsers } from "../saga/workers/fetchUsers";

const fetchUsersAction = usersActions.fetchUsersAsync();

const saga = cloneableGenerator(fetchUsers)(fetchUsersAction);
let clone = null;

describe("fetchUsers saga test", () => {
  describe("should fetch data", function() {
    it("should action startFetching", function() {
      expect(saga.next().value).toEqual(put(uiActions.startFetching()));
    });

    it("should call a fetch request", function() {
      expect(saga.next().value).toEqual(apply(api, api.users.fetch));
      clone = saga.clone();
    });
  });

  describe("should success response", () => {
    it("should get a Success request", function() {
      expect(saga.next(__.fetchUsersResponseSuccess).value).toEqual(
        apply(__.fetchUsersResponseSuccess, __.fetchUsersResponseSuccess.json)
      );
    });

    it("should action fillUsers", function() {
      expect(saga.next(__.responseUsersDataSuccess).value).toEqual(
        put(usersActions.fillUsers(__.users))
      );
    });

    it("should action stopFetching", function() {
      expect(saga.next().value).toEqual(put(uiActions.stopFetching()));
    });

    it("should finish saga", function() {
      expect(saga.next().done).toEqual(true);
    });
  });

  describe("should fail response", () => {
    it("should get fail response`", function() {
      expect(clone.next(__.fetchResponseFail400).value).toEqual(
        apply(__.fetchResponseFail400, __.fetchResponseFail400.json)
      );
    });

    it("should action emitError", function() {
      expect(clone.next(__.responseDataFail).value).toEqual(put(uiActions.emitError(__.error, 'fetchUsers worker')));
    });

    it("should action stopFetching", function() {
      expect(clone.next().value).toEqual(put(uiActions.stopFetching()));
    });

    it("should finish saga", function() {
      expect(clone.next().done).toEqual(true);
    });
  });
});

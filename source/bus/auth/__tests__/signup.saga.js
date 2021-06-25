import { put, apply } from "redux-saga/effects";
import { cloneableGenerator } from "redux-saga/utils";

import { api } from "../../../REST";
import { authActions } from "../actions";
import { uiActions } from "../../ui/actions";
import { profileActions } from "../../profile/actions";
import { signup } from "../saga/workers/signup";
import {usersActions} from '../../users/actions';

const signupAction = authActions.signupAsync(__.userProfile);

const saga = cloneableGenerator(signup)(signupAction);
let clone = null;

describe("signup saga", () => {
  describe("should fetch", () => {
    it("should dispatch startFetching action", function() {
      expect(saga.next().value).toEqual(put(uiActions.startFetching()));
    });

    it("should call a fetch request", function() {
      expect(saga.next().value).toEqual(
        apply(api, api.auth.signup, [__.userProfile])
      );
      clone = saga.clone();
    });
  });

  describe("should success response", () => {
    it("should get a Success request", function() {
      expect(saga.next(__.fetchResponseSuccess).value).toEqual(apply(__.fetchResponseSuccess, __.fetchResponseSuccess.json))
    });

    it("should dispatch fillProfile action Snapshot", function() {
      expect(saga.next(__.responseDataSuccess).value).toEqual(put(profileActions.fillProfile(__.userProfile)));
    });

    it("should dispatch authenticate action", function() {
      expect(saga.next().value).toEqual(put(authActions.authenticate()));
    });

    it("should stop fetching in success", function() {
      expect(saga.next().value).toEqual(put(uiActions.stopFetching()));
    });

    it("should finish saga  in success", function() {
      expect(saga.next().done).toEqual(true);
    });
  });

  describe("should have 400 status  response", () => {
    it("should return 400 status response", function() {
      expect(clone.next(__.fetchResponseFail400).value).toEqual(
        apply(__.fetchResponseFail400, __.fetchResponseFail400.json)
      );
    });

    it("should emit error action", function() {
      expect(clone.next(__.responseDataFail).value).toEqual(
        put(uiActions.emitError(__.error, "signup worker"))
      );
    });

    it("should stop fetching in fail", function() {
      expect(clone.next().value).toEqual(put(uiActions.stopFetching()));
    });

    it("should finish saga in fail", function() {
      expect(clone.next().done).toEqual(true);
    });
  });
});

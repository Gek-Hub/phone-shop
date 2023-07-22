import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    makeAutoObservable(this);
  }
  get user() {
    return this._user;
  }
  get isAuth() {
    return this._isAuth;
  }
  setIsAuth(isAuth) {
    this._isAuth = isAuth;
  }
  setUser(user) {
    this._user = user;
  }
}

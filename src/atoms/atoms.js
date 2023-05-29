// recoil/atoms.js

import { atom, selector } from 'recoil';
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// 검색 결과 상태
export const searchResultState = atom({
  key: 'searchResultState',
  default: [],
});

// 유저 로그인 정보 상태
export const LoginState = atom({
  key: "LoginState",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const isLoginSelector = selector({
  key: "isLoginSelector",
  get: ({ get }) => !!get(LoginState),
});
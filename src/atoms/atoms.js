// recoil/atoms.js

import { atom } from 'recoil';

// 검색 결과 상태
export const searchResultState = atom({
  key: 'searchResultState',
  default: [],
});

// 유저 정보 상태
export const userState = atom({
  key: "userState",
  default: null,
});
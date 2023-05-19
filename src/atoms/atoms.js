// recoil/atoms.js

import { atom } from 'recoil';

// 검색 결과 상태
export const searchResultState = atom({
  key: 'searchResultState',
  default: [],
});
import { useReducer } from "react";

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

export const useUserFormInput = (initialState) => {
  const [userFormState, dispatch] = useReducer(reducer, initialState);
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [userFormState, onChange];
}; 
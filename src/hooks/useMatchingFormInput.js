import { useReducer } from "react";

const ACTION_TYPES = {
  handleInput: "handle-Input",
  setCategory: "set-category",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.handleInput:
      return {
        ...state,
        [action.field]: action.value,
      };
    case ACTION_TYPES.setCategory:
      return {
        ...state,
        category: action.value,
      };
    default:
      return state;
  }
}

export const useMatchingFormInput = (initialFormState) => {
  const [formState, dispatch] = useReducer(reducer, initialFormState);

  
  const onTextChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: ACTION_TYPES.handleInput,
      field: name,
      value: value,
    });
  };

  const onButtonChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: ACTION_TYPES.setCategory,
      field: name,
      value: value,
    });
  }

  return [formState, onTextChange];
};
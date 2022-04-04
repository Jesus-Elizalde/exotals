import { csrfFetch } from "./csrf";

const SET_MODEL = "model/setModels";

const setModels = (model) => {
  return {
    type: SET_MODEL,
    payload: model,
  };
};

export const getAllModels = () => async (dispatch) => {
  const response = await csrfFetch("/api/models");

  if (response.ok) {
    const data = await response.json();

    dispatch(setModels(data));
    return data;
  }
};

const initialState = { models: {} };
const modelReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_MODEL:
      newState = Object.assign({}, state);
      newState.models = action.payload;
      action.payload.data.forEach((ele) => {
        newState.models[ele.id] = ele;
      });
      return newState;
    default:
      return state;
  }
};

export default modelReducer;

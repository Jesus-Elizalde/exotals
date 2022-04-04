import { csrfFetch } from "./csrf";

const SET_MAKES = "makes/setCars";

const setMakes = (makes) => {
  return {
    type: SET_MAKES,
    payload: makes,
  };
};

export const getAllMakes = () => async (dispatch) => {
  const response = await csrfFetch("/api/makes");

  if (response.ok) {
    const data = await response.json();

    dispatch(setMakes(data));
    return data;
  }
};

const initialState = { makes: {} };
const makeReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_MAKES:
      newState = Object.assign({}, state);
      newState.makes = action.payload;
      action.payload.data.forEach((ele) => {
        newState.makes[ele.id] = ele;
      });
      return newState;
    default:
      return state;
  }
};

export default makeReducer;

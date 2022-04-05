import { csrfFetch } from "./csrf";

const SET_UTILDATA = "data/setData";

const setUtilData = (utildata) => {
  return {
    type: SET_UTILDATA,
    payload: utildata,
  };
};

export const getAllUtilData = () => async (dispatch) => {
  const response = await csrfFetch("/api/utildata");

  if (response.ok) {
    const data = await response.json();

    dispatch(setUtilData(data));
    return data;
  }
};

const initialState = { data: {} };
const utilDataReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_UTILDATA:
      newState = Object.assign({}, state);
      newState.data = action.payload;
      //   action.payload.data.forEach((ele) => {
      //     newState.data[ele.id] = ele;
      //   });
      return newState;
    default:
      return state;
  }
};

export default utilDataReducer;

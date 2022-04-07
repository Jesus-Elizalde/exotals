import { csrfFetch } from "./csrf";

const SET_REVIEWS = "reviews/setReviews";

const setReviews = (reviews) => {
  return {
    type: SET_REVIEWS,
    payload: reviews,
  };
};

export const getAllReviews = () => async (dispatch) => {
  const response = await csrfFetch("/api/reviews");

  if (response.ok) {
    const data = await response.json();
    dispatch(setReviews(data));
    return data;
  }
};

export const createReview = (review) => async (dispatch) => {
  const response = await csrfFetch("/api/reviews/new", {
    method: "POST",
    body: JSON.stringify(review),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(getAllReviews());
    return data;
  }
};

const initialState = {};

const reviewReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_REVIEWS:
      newState = Object.assign({}, state);
      action.payload.forEach((ele) => {
        newState[ele.id] = ele;
      });
      return newState;
    default:
      return state;
  }
};

export default reviewReducer;

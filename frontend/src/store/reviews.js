import { csrfFetch } from "./csrf";

const SET_REVIEWS = "review/setReviews";
const UPDATE_REVIEW = "review/updateReview";
const DELETE_REVIEW = "review/deleteCar";

const setReviews = (reviews) => {
  return {
    type: SET_REVIEWS,
    payload: reviews,
  };
};

const deleteReview = (review) => {
  return {
    type: DELETE_REVIEW,
    payload: review,
  };
};

const updateReview = (review) => {
  return {
    type: UPDATE_REVIEW,
    payload: review,
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

export const updateOneReview = (review) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${review.id}`, {
    method: "PUT",
    body: JSON.stringify(review),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(updateReview(data));

    return data;
  }
};

export const deleteOneReview = (reviewId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}/delete`, {
    method: "DELETE",
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(deleteReview(data));

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
    case UPDATE_REVIEW:
      newState = Object.assign({}, state);

      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_REVIEW:
      newState = Object.assign({}, state);
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

export default reviewReducer;

import { csrfFetch } from "./csrf";

const SET_FAVORITES = "favorites/setFavorites";
const ADD_FAVORITE = "favorites/addFavortie";
const DELETE_FAVORITE = "favorites/deleteFavorites";

const setFav = (favorites) => {
  return {
    type: SET_FAVORITES,
    payload: favorites,
  };
};

const deleteFav = (favoritesId) => {
  return {
    type: DELETE_FAVORITE,
    payload: favoritesId,
  };
};

export const getAllFav = () => async (dispatch) => {
  const response = await csrfFetch(`/api/favorites/`);

  if (response.ok) {
    const data = await response.json();
    dispatch(setFav(data));
    return data;
  }
};

export const addOneFav = (favorite) => async (dispatch) => {
  const response = await csrfFetch(`/api/favorites/new`, {
    method: "POST",
    body: JSON.stringify(favorite),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(getAllFav(data.userId));
    return data;
  }
};

export const deleteOneFav = (favId) => async (dispatch) => {
  const response = await csrfFetch(`/api/favorites/${favId}/delete`);

  if (response.ok) {
    const data = await response.json();
    dispatch(deleteFav(data));
    return data;
  }
};

const initialState = {};

const favoriteReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_FAVORITES:
      newState = Object.assign({}, state);
      action.payload.forEach((ele) => {
        newState[ele.id] = ele;
      });
      return newState;
    case DELETE_FAVORITE:
      newState = Object.assign({}, state);
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

export default favoriteReducer;

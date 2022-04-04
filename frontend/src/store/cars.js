import { csrfFetch } from "./csrf";

const SET_CARS = "cars/setCars";
const UPDATE_CAR = "cars.updateCars";
const REMOVE_CARS = "cars/removeCars";

const setCars = (cars) => {
  return {
    type: SET_CARS,
    payload: cars,
  };
};

export const removeCars = () => {
  return {
    type: REMOVE_CARS,
  };
};

export const updateCars = (car) => {
  return {
    type: UPDATE_CAR,
    payload: car,
  };
};

export const getAllCars = () => async (dispatch) => {
  const response = await csrfFetch("/api/cars");
  const data = await response.json();

  dispatch(setCars(data));
  return data;
};

const updateCar = (car) => {
  // const response = await csrfFetch(`/${car.id}`)
};

const initialState = { cars: {} };
const carReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_CARS:
      newState = Object.assign({}, state);
      newState.cars = action.payload;
      action.payload.data.forEach((ele) => {
        newState.cars[ele.id] = ele;
      });
      return newState;

    case REMOVE_CARS:
      newState = Object.assign({}, state);
      newState.cars = null;
      return newState;
    case UPDATE_CAR:
      newState = Object.assign({}, state);

    default:
      return state;
  }
};

export default carReducer;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { carsReducer } from "./cars/carsSlice";
import { filterReducer } from "./filter/filterSlice";
import { favCarsPersistReducer } from "./cars/favCarsSlice";

const rootReducer = combineReducers({
  cars: carsReducer,
  filter: filterReducer,
  favCars: favCarsPersistReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

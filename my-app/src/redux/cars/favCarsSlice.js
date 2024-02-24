import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createSlice } from "@reduxjs/toolkit";

export const favCarsSlice = createSlice({
  name: "favCars",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavCar(state, { payload }) {
      state.favorites.push(payload);
    },
    deleteFavCar(state, { payload }) {
      const index = state.favorites.findIndex((car) => car.id === payload);
      state.favorites.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: "favCars",
  storage,
  whitelist: ["favorites"],
};

export const favCarsPersistReducer = persistReducer(
  persistConfig,
  favCarsSlice.reducer
);

export const { addFavCar, deleteFavCar } = favCarsSlice.actions;

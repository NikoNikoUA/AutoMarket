import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { carsReducer } from "./cars/carsSlice";
import { filterReducer } from "./filter/filterSlice";
import { favCarsPersistReducer } from "./cars/favCarsSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const rootReducer = combineReducers({
  cars: carsReducer,
  filter: filterReducer,
  favCars: favCarsPersistReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

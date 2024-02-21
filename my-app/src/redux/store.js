import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./cars/carsSlice";
// import {
//   persistReducer,
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

const rootReducer = carsReducer;

export const store = configureStore({
  reducer: rootReducer,
});

// // Persisting token field from auth slice to localstorage
// const carsPersistConfig = {
//   key: 'cars',
//   storage,
// };

// const persistedCarsReducer = persistReducer(carsPersistConfig, carsReducer);

// const rootReducer = persistedCarsReducer;

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://654b74915b38a59f28ef1985.mockapi.io";

export const LIMIT = 12;

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (
    _,
    thunkAPI,
    params = {
      page: 1,
    }
  ) => {
    try {
      const response = await axios.get(`/cars?${params}&${LIMIT}`);
      console.log(response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

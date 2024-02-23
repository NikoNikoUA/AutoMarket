import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://654b74915b38a59f28ef1985.mockapi.io/api";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (_, thunkAPI, page = 1, limit = 12) => {
    try {
      const response = await axios.get(`/cars?page=${page}&limit=${limit}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

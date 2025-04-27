import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../auth/operations";

export const fetchContacts = createAsyncThunk(
  "contact/fetchContact",
  async (_, thunkAPI) => {
    try {
      const { data } = await authInstance.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  "contact/addContact",
  async ({ name, number }, thunkAPI) => {
    try {
      const { data } = await authInstance.post("/contacts", {
        name,
        number,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (id, thunkAPI) => {
    try {
      const { data } = await authInstance.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

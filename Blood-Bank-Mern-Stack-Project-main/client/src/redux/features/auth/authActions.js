import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from "react-toastify";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      console.log("Requesting login with URL:", `${process.env.REACT_APP_BASEURL}/auth/login`);
      const { data } = await API.post("/auth/login", { role, email, password });
      if (data.success) {
        toast.success(data.message);
        localStorage.setItem("token", data.token);
        window.location.replace("/");
      }
      return data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error("Login Error:", error); // Log detailed error
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      role,
      email,
      password,
      phone,
      organisationName,
      address,
      hospitalName,
      website,
    },
    { rejectWithValue }
  ) => {
    try {
      console.log("Requesting register with URL:", `${process.env.REACT_APP_BASEURL}/auth/register`);
      const { data } = await API.post("/auth/register", {
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website,
      });
      if (data.success) {
        toast.success("User Registered Successfully");
        window.location.replace("/login");
      }
      return data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error("Register Error:", error); // Log detailed error
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      console.log("Requesting current user with URL:", `${process.env.REACT_APP_BASEURL}/auth/current-user`);
      const { data } = await API.get("/auth/current-user");
      return data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error("Get Current User Error:", error); // Log detailed error
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

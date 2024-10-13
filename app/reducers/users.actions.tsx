import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { User } from "../interfaces/user.interface";
import { UserService } from "./users.service";

export const createUser = createAsyncThunk<User, User>(
  'user/createUser',
  async (user: User) => {
        return await UserService.create(user);
    }
);

export const getAllUsers = createAsyncThunk<User[]>(
    'user/getAllUsers',
    async () => {
        return await UserService.getAll();
    }
);

export const updateUser = createAsyncThunk<User, User>(
    'user/updateUser',
    async (user: User) => {
          return await UserService.update(user);
      }
);

export const deleteUser = createAsyncThunk<void, User>(
    'user/deleteUser',
    async (user: User) => {
          await UserService.remove(user);
      }
);
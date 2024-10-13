import { RootState } from "../store/index";

export const createdUser = (state: RootState) => state.user;
export const allUsers = (state: RootState) => state.user.users
export const loadingAllUsers = (state: RootState) => state.user.loading
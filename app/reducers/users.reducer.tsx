import { createReducer } from "@reduxjs/toolkit";
import { createUser, getAllUsers, updateUser, deleteUser } from "./users.actions";
import { User } from "../interfaces/user.interface";


interface UserReducer {
    name: string,
    lastName: string,
    loading: boolean,
    users: User[],
}

const initialSate: UserReducer = {
    name: '',
    lastName: '',
    loading: true,
    users: [],
};

export const userReducer = createReducer(initialSate, builder => {
    builder.addCase(createUser.pending, state => ({
        ...state,
        loading: true,
    }));

    builder.addCase(createUser.rejected, state => ({
        ...state,
        loading: false,
    }));

    builder.addCase(createUser.fulfilled, state => ({
        ...state,
        loading: false,
    }));
    builder.addCase(getAllUsers.pending, state => ({
        ...state,
        loading: true,
    }));

    builder.addCase(getAllUsers.rejected, state => ({
        ...state,
        loading: false,
    }));

    builder.addCase(getAllUsers.fulfilled,  (state, action) => ({
        ...state,
        users: action.payload,
        loading: false,
    }));
    builder.addCase(updateUser.pending, state => ({
        ...state,
        loading: true,
    }));

    builder.addCase(updateUser.rejected, state => ({
        ...state,
        loading: false,
    }));

    builder.addCase(updateUser.fulfilled, state => ({
        ...state,
        loading: false,
    }));
    builder.addCase(deleteUser.pending, state => ({
        ...state,
        loading: true,
    }));
    builder.addCase(deleteUser.rejected, state => ({
        ...state,
        loading: false,
    }));
    builder.addCase(deleteUser.fulfilled, state => ({
        ...state,
        loading: false,
    }));
})
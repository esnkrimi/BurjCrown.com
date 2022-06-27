import { createReducer, on } from "@ngrx/store";
import { User } from "../models/user.model";
import { userLogined, userLougout } from '../actions/user.actions';
export const initialUser: Readonly<User> = {
    user_id: 0,
    user_name: '',
    basket_count: 0,
};
export const loginReducer = createReducer(
    initialUser,
    on(userLogined, (state, { user }) => user)
)

export const logoutReducer = createReducer(
    initialUser,
    on(userLougout, (state) => state)
)
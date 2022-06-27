import { createAction, props } from "@ngrx/store";
import { User } from "../models/user.model";

export const userLogined = createAction(
    '[user] login',
    props<{ user: User }>()
);

export const userLougout = createAction('[user] logout');
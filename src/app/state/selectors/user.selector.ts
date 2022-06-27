import { createFeatureSelector } from "@ngrx/store";
import { User } from "../models/user.model";

export const userSelector = createFeatureSelector<Readonly<User>>('userReducer');
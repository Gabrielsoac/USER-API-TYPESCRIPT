/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, Response } from "express";
import { IUser } from "../../models/user";

export interface IGetUsersController {
    getUsers(_: Request, res: Response<IUser[]>): any;
}

export interface IGetUsersRepository {
    getUsers(): Promise<IUser[]>;
}
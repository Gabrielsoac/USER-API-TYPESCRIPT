import { Request, Response } from "express";
import { IGetUsersController, IGetUsersRepository } from "./protocols";
import { StatusCodes } from "http-status-codes";

export class getUsersController implements IGetUsersController {

    private getUserRepository: IGetUsersRepository;

    constructor(getUserRepository: IGetUsersRepository){
        this.getUserRepository = getUserRepository;
    }

    async getUsers(_: Request, res: Response) {

        try{
            const users = await this.getUserRepository.getUsers();
        
            res.status(StatusCodes.OK).json(users);
        } catch(e){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({error: (e as Error).message});
        }

    }
}
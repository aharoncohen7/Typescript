import { Request, Response, Router } from "express";
import UserService from "../services/UserServices";
const UserRouter = Router();


UserRouter.get('/', async (req: Request, res: Response) => {
    try{
        res.status(200).send({ message: UserService.getAllUsers() });
    }catch(err){
        res.status(400).send({ message: err });
    }
})

export default UserRouter
import { Request, Response } from "express";
import taskServices from "../services/taskServices";
import userServices from "../services/userServices";
import { AuthRequest } from "../middlewares/auth";

const usersController = {
    index: async (req:Request, res: Response)=>{
        try {
            const users = await userServices.getAllUsers()

            return res.json(users)
        } catch (err) {
            if(err instanceof Error) return res.status(400).json({message: err.message})
        }
    },
    getUser: async (req:AuthRequest, res: Response)=>{
        const id = req.user!.id
        try {
            const user = await userServices.getUserById(Number(id))

            return res.json(user)
        } catch (err) {
            if(err instanceof Error) return res.status(400).json({message: err.message})
        }
    },
    //PUT
    update: async (req: AuthRequest,res: Response)=> {
        const {name, email, picUrl, phone} = req.body
        const id = req.user!.id
        try {
            const updatedUser = await userServices.update(id, {name ,email, picUrl, phone} )
            return res.status(201).json(updatedUser)
        } catch (err) {
            if(err instanceof Error) return res.status(400).json({message: err.message})
        }
    },
    updatePassword: async (req: AuthRequest,res: Response)=> {
        const {currentPassword, newPassword} = req.body
        const user = req.user!

        user.checkPassword(currentPassword, async (err, isSame) => {
            try {
                if(err || typeof isSame === undefined) return res.status(400).json({message: 'Erro de verificação'})
                if(!isSame) return res.status(400).json({message: 'Senha incorreta.'})
                await userServices.updatePassword(user.id, newPassword)
                return res.status(204).send()
            } catch (err) {
                if (err instanceof Error) return res.status(400).json({message: err.message})
            }
        })        
        
    },
    createUser: async (req: Request, res: Response) => {
        const {name, email, password, role, picUrl, phone} = req.body
        try {
            const user = await userServices.createUser(name, email, password, role, picUrl, phone)
            return res.status(201).json(user)
        } catch (err) {
            if (err instanceof Error) return res.status(400).json({message: err.message})
        }
    }
}

export default usersController
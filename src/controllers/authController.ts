import { Response } from "express";
import { AuthRequest } from "../middlewares/auth";
import userServices from "../services/userServices";
import { jwtServices } from "../services/jwtServices";

export const authController = {
    login: async (req: AuthRequest, res: Response) => {
        const {email, password} = req.body

        try {
            const user = await userServices.findByEmail(email)
            if(!user) return res.status(404).json({message: 'Email não registrado.'})
            user.checkPassword(password, (err, isSame)=> {
                if(err) return res.status(400).json({message: err.message})
                if(!isSame) return res.status(401).json({message: 'Senha incorreta.'})
                const payload = {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
                const token = jwtServices.signToken(payload, '30d')
                return res.json({authenticated: true, ...payload, token})
            })
        } catch (err) {
            if (err instanceof Error) return res.status(400).json({message: err.message})
        }
    }
}
import { NextFunction, Request, Response } from "express";
import { UserInstance } from "../models/User";
import { jwtServices } from "../services/jwtServices";
import userServices from "../services/userServices";
import { JwtPayload } from "jsonwebtoken";

export interface AuthRequest extends Request{
    user?: UserInstance | null
}

export function ensureAuth(req: AuthRequest, res: Response, next: NextFunction){
    const authorizationHeader = req.headers.authorization

    if(!authorizationHeader) return res.status(401).json({message: 'Não autorizado: nenhum token encontrado.'})

    const token = authorizationHeader.replace(/Bearer/, '').trim()
    jwtServices.verifyToken(token, async (err, decoded)=>{
        if(err||typeof decoded === undefined) return res.status(401).json({message: 'não autorizado: token inválido'})

        const user = await userServices.findByEmail((decoded as JwtPayload).email)
        req.user = user
        next()
    })
}
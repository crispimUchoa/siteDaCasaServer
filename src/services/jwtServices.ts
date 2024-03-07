import jwt, { VerifyCallback } from 'jsonwebtoken'

const secret = 'segredo-da-casa'

export const jwtServices = {
    signToken: (payload: string | object | Buffer, expiration: string) => jwt.sign(payload, secret, {expiresIn: expiration}),

    verifyToken: (token: string, callbackfn: VerifyCallback) => {
        jwt.verify(token, secret, callbackfn)
    }    
}
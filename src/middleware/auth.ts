import { Request, Response, NextFunction } from "express";
import { decode, verify } from "jsonwebtoken"
import { ERROR_JWT } from "@src/config/message"

const Auth = (request: Request, response: Response, next: NextFunction) => {

    const authHeader = request.headers.authorization;
    if (!authHeader) return response.json({ err: true, jwt: true, message: ERROR_JWT() })

    const [, token] = authHeader.split(" ");
    try {
        verify(token, process.env.JWT, (err, decoded) => {
            request.userId = decoded.data;
        })

        return next();
    } catch (error) {
        return response.json({ err: true, jwt: true, message: ERROR_JWT() })
    }
}


export { Auth }
import { Request, Response } from "express";

class HomeController {
    index(req: Request, res: Response) {
        res.json({ message: "HomeController.index()" })
    }
}

export default new HomeController()
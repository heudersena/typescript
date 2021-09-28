import express from "express";

import HomeController from "@controllers/HomeController"


const homeRouter = express.Router();


homeRouter.get("/", HomeController.index);

export { homeRouter }

import express from "express";

import gameControllers from "../controllers/game.controller.js";

const gameRoutes = express.Router();

gameRoutes.post("/api/", gameControllers.create);
gameRoutes.get("/api/", gameControllers.findAll);
gameRoutes.get("/api/:id", gameControllers.findOne);
gameRoutes.put("/api/:id", gameControllers.update);
gameRoutes.delete("/api/:id", gameControllers.delete);

export default gameRoutes;

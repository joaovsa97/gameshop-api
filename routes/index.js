import express from "express";
import gameRoutes from "./game.routes.js";

const routes = (app) => {
  app.use(express.json(), gameRoutes);
};

export default routes;

import { Router } from "express";

//DOCU: The Router() method in Express returns a new instance of the Router class.
const router = Router();

//DOCU: import the controller object and instantiate it.
import Controller from "../system/controllers.js";
//DOCU: import middleware object and instantiate it.
import Middleware from "../system/middlewares.js";

//DOCU: Home page route (default).
router.get("/", (request, response) => {
  response.render("index");
});

//DOCU: Declare routes here. pattern is Controller['controllerName']->Method.
//DOCU: middleware follows a pattern Middleware['filename']->Method.
router.get("/greet/:id", Controller["Users"].greet);
router.get("/test", Controller["Users"].test);
router.get("/users", Controller["Users"].getAllUsers)

export default router;

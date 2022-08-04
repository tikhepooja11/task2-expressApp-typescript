import { Router } from "express";

export const defaultRoute = Router();
defaultRoute.get('/', (req, res) =>{
    res.send("Welcome to first Express Application using Typescript");
});

//exporting a router will make our router visible to be imported outside this module
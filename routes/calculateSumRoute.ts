import { Router, Request, Response } from "express";
// import express, { Request, Response } from 'express';
// export const calcRoute = express.Router();
export const calulateSumRoute = Router();
calulateSumRoute.post('/summation', (req: Request, res: Response): void =>{
    console.log(`inside summation route`);
    const { a, b } = req.body;              //fetching request body data
    
    //check if both parameters present in request body and both should be number data type
    if(a && b   &&   typeof(a) == 'number' && typeof(b) == 'number'){

        res.json({
            success: true,
            message: a + b
        });
    }else{

        res.json({
            success: false,
            message: 'Sry cannot Proceed... Please Pass the paraeters'
        });
    }
});

import { Router, Request, Response } from "express";
import { Employee } from "../employee";
// import express, { Request, Response } from 'express';
// export const calcRoute = express.Router();
export const getAllEmp = Router();
getAllEmp.get('/getAllEmp', (req: Request, res: Response): void =>{
    console.log(`inside getAllEmp route`);
    // let employees: Array<Employee>= req.body;
   
    let employees: Array<Employee>;

      employees = [{
            "id": 1,
            "firstName":'pooja',
            "lastName":'tikhe',
            "emailId":'tikhepooja11@gmail.com'
        },
        {
            "id": 2,
            "firstName":'aarti',
            "lastName":'tikhe',
            "emailId":'tikheaarti12@gmail.com'
        }
    ];
    let emplist: Array<Employee> = [];
    emplist = JSON.parse(JSON.stringify(employees));
    console.log(emplist);
    res.json({emplist});
    
});


   


import { Router, Request, Response } from "express";
import { Employee } from "../employee";
// import express, { Request, Response } from 'express';
// export const calcRoute = express.Router();
export const postEmpList = Router();
postEmpList.post('/createemployee', (req: Request, res: Response): void =>{
    console.log(`inside postEmpList route`);
    //const { a, b } = req.body;              //fetching request body data

    let employees: Array<Employee> = [];
    employees.push(new Employee(1,'pooja','tikhe','tikhepooja11@gmail.com'));
    employees.push(new Employee(2,'aarti','tikhe','tikheaarti22@gmail.com'));
    employees.push(new Employee(3,'sushant','tikhe','tikhesushant02@gmail.com'));

    // employees = [{
    //         "id": 1,
    //         "firstName":'pooja',
    //         "lastName":'tikhe',
    //         "emailId":'tikhepooja11@gmail.com'
    //     },
    //     {
    //         "id": 2,
    //         "firstName":'aarti',
    //         "lastName":'tikhe',
    //         "emailId":'tikheaarti12@gmail.com'
    //     }
    // ];
    res.json({employees});
    
});

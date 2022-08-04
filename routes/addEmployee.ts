import { Router, Request, Response } from "express";
import { Employee } from "../employee";
// import express, { Request, Response } from 'express';
// export const calcRoute = express.Router();
export const addEmployee = Router();
addEmployee.post('/addEmployee', (req: Request, res: Response): void =>{
    console.log(`inside addEmployee route`);
    let employees: Array<Employee> = [] ;
    let fetchedEmp: Employee= req.body;
    // let newEmp: any;
    let newEmp: any = {
        id: undefined,
        firstName: undefined,
        lastName: undefined,
        emailId: undefined
    }
    newEmp.id = fetchedEmp.id;
    newEmp.firstName = fetchedEmp.firstName;
    newEmp.lastName = fetchedEmp.lastName;
    newEmp.emailId = fetchedEmp.emailId;

    console.log(newEmp);
    employees.push(newEmp);
    // emplist = JSON.parse(JSON.stringify(employees));
    console.log(employees);
    res.json({employees});
    
});




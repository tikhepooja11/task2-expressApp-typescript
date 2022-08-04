import express, { Router } from 'express';
import { defaultRoute } from './defaultRoute';
import { calulateSumRoute } from './calculateSumRoute';
import { postEmpList } from './postEmpList';
import { getAllEmp } from './getAllEmp';
import { addEmployee } from './addEmployee';

export const routes = express.Router();
routes.use(defaultRoute);
routes.use(calulateSumRoute);
routes.use(postEmpList);
routes.use(getAllEmp);
routes.use(addEmployee);
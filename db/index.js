import e from "express";
import {Sequelize} from "sequelize";

export const sequelize = new Sequelize("Beers_db","root","password",{
    dialect:"myqsql",
    host:"localhost"
});
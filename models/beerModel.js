import { sequelize } from "../db/index.js";

import {Sequelize} from "sequelize";

export const Beer = sequelize.define("beers",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    tagline:{
        type:Sequelize.STRING,
        allowNull:false
    },
    first_brewed:{
        type:Sequelize.DATE,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    image_url:{
        type:Sequelize.STRING,
        allowNull:false
    },
    abv:{
        type:Sequelize.DECIMAL,
        allowNull:false
    },
    ph:{
        type:Sequelize.DECIMAL,
        allowNull:false
    }
});
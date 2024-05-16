import { db } from "../config/db.js";

import { DataTypes } from "sequelize";

export const Character = db.define('characters', {
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    gender: DataTypes.STRING,
    species: DataTypes.STRING,
    image: DataTypes.STRING
});
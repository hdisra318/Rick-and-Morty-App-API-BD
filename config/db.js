import {Sequelize} from "sequelize";

export const db = new Sequelize("rick_and_morty", "root", "12345678", {
    port: 3306,
    host: "localhost",
    dialect: "mysql"
})
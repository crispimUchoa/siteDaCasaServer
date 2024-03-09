import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    database: 'house_app',
    dialect: "postgres",
    host: 'sitedacasaserver.onrender.com',
    username: 'house_app_user',
    password: 'LotcDl29nrSUOljrUeC5sPUws03QrT6J',
    port: 5432,
    define: {
        underscored: true
    }
})
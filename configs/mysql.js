import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("DBConcesionaria", "root", "vFcOySaeonRXYpFgipFVyzmGUACappCN", {
  host: "tramway.proxy.rlwy.net",
  dialect: "mysql",
  port: process.env.PORTMYSQL || 10373,
});

// sequelize requiere que ya se halla creado una base de datos
//mysql://root:vFcOySaeonRXYpFgipFVyzmGUACappCN@tramway.proxy.rlwy.net:10373/railway
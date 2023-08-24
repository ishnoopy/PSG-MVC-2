import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2/promise.js'; // Remove the .js extension

export default class PsgModel {
  constructor() {
    if (process.env.MYSQL) {
      this.connection =  mysql.createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        port: process.env.MYSQL_PORT,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
      });
    }
  }
}

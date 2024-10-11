import { DataSourceOptions } from "typeorm";
import dotenv from 'dotenv';

dotenv.config();

const config: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/migrations/**/*.ts"],
  subscribers: ["src/subscribers/**/*.ts"],
  synchronize: false,
  logging: true,
  ssl: {
    rejectUnauthorized: false
  }
};

export default config;
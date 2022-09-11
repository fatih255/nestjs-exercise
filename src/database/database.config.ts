import { DataSourceOptions } from "typeorm";

const developmentSettings: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'real_estate',
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
        __dirname + '/../**/**/*.entity{.ts,.js}',
    ],
    synchronize: true,
}

const productionSettings: DataSourceOptions = {
    type: 'postgres',
    host: 'pg_container',
    port: 5432,
    username: 'root',
    password: 'root',
    database: 'postgres',
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
        __dirname + '/../**/**/*.entity{.ts,.js}',
    ],
    synchronize: false,
}

export const databaseConfig: DataSourceOptions = process.env.NODE_ENV === 'production' ? productionSettings : developmentSettings;




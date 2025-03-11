import { DataSource, DataSourceOptions } from 'typeorm';
import { entities } from '../database';

const config: DataSourceOptions = {
    type: 'sqlite',
    database: 'database.sqlite',
    synchronize: true,
    logging: process.env.NODE_ENV === 'production' ? false : true,
    entities: [...entities],
    migrations: ['dist/database/migrations/*.{ts,js}'],
};

export default config;

export const AppDataSource = new DataSource(config);

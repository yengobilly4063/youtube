import 'reflect-metadata';
import config, { AppDataSource } from '../config/ormconfig';
import { DataSource } from 'typeorm';

let appDataSource = AppDataSource;

(async () => {
    if (!appDataSource) {
        appDataSource = new DataSource(config);
    }

    appDataSource
        .initialize()
        .then(() => {
            console.log(`[Database]: Connection successfull`);
        })
        .catch((errror) => console.log(errror));
})();

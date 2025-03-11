import { AppDataSource } from '../config/ormconfig';
import { PostEntity } from './entities/post.entity';

export const postRepostitory = AppDataSource.getRepository(PostEntity);

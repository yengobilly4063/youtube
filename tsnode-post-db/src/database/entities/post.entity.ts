import { BaseEntity } from './base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'posts' })
export class PostEntity extends BaseEntity {
    @Column()
    content: string;

    @Column()
    title: string;

    @Column({ default: false })
    published: boolean;

    @Column('simple-array', { nullable: true })
    tags: string[];

    @Column({ default: 0 })
    likes: number;

    @Column()
    authorId: string;
}

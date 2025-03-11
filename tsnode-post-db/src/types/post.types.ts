export interface Post {
    id: string;
    title: string;
    content: string;
    published: boolean;
    tags: string[];
    likes: number;
    authorId: string;
}

export interface CreateUpdatePostDto {
    title: string;
    content: string;
    published: boolean;
    tags: string[];
    likes: number;
}

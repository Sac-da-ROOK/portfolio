import { NextResponse } from 'next/server';
import { getPosts } from '../../../lib/posts';

export async function GET() {
    const publishedPosts = getPosts()
        .filter((post) => post.status === 'Published')
        .map(({ id, title, content, status, createdAt, attachments }) => ({
            id,
            title,
            content,
            status,
            createdAt,
            attachments: attachments ?? [],
        }));

    return NextResponse.json(publishedPosts);
}

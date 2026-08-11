import { NextResponse } from 'next/server';
import { createPost, getPosts } from '../../../lib/posts';

export async function GET() {
    return NextResponse.json(getPosts());
}

export async function POST(request: Request) {
    const body = await request.json();
    const post = createPost({
        title: body.title,
        content: body.content,
        status: body.status,
        attachments: body.attachments,
    });

    return NextResponse.json(post, { status: 201 });
}

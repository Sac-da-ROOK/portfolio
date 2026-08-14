import { NextResponse } from 'next/server';
import { deletePost, getPosts, recallPost, updatePost, updatePostStatus } from '../../../../lib/posts';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = getPosts().find((entry) => entry.id === id);

    if (!post) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json(post);
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const body = await request.json();

    if (body.action === 'publish') {
        const post = updatePostStatus(id, 'Published');
        return NextResponse.json(post);
    }

    if (body.action === 'update') {
        const post = updatePost(id, {
            title: body.title,
            content: body.content,
            status: body.status,
            attachments: body.attachments,
        });

        return NextResponse.json(post ?? { error: 'Not found' }, post ? { status: 200 } : { status: 404 });
    }

    if (body.action === 'delete') {
        const post = deletePost(id);
        if (!post) {
            return NextResponse.json({ error: 'Not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, deletedPost: post });
    }

    if (body.action === 'recall') {
        try {
            const post = await recallPost(id, body.code);
            return NextResponse.json(post);
        } catch (error) {
            return NextResponse.json({ error: error instanceof Error ? error.message : 'Unable to recall article.' }, { status: 400 });
        }
    }

    return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = deletePost(id);

    if (!post) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, deletedPost: post });
}

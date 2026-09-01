import { NextResponse } from 'next/server';
import { addCommentToPost, getArticleComments } from '../../../lib/posts';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const articleId = searchParams.get('articleId') ?? '';
    return NextResponse.json({ comments: getArticleComments(articleId) });
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const articleId = typeof body?.articleId === 'string' ? body.articleId : '';
        const name = typeof body?.name === 'string' ? body.name : '';
        const message = typeof body?.message === 'string' ? body.message : '';

        if (!articleId || !name.trim() || !message.trim()) {
            return NextResponse.json({ error: 'Name and comment are required.' }, { status: 400 });
        }

        if (message.trim().length < 2) {
            return NextResponse.json({ error: 'Please add a longer comment.' }, { status: 400 });
        }

        const comment = addCommentToPost(articleId, name, message);
        if (!comment) {
            return NextResponse.json({ error: 'Unable to save comment.' }, { status: 404 });
        }

        return NextResponse.json({ success: true, comment }, { status: 201 });
    } catch {
        return NextResponse.json({ error: 'Unable to create comment.' }, { status: 500 });
    }
}

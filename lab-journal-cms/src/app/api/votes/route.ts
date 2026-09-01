import { NextResponse } from 'next/server';
import { setVoteForSession } from '../../../lib/posts';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const articleId = typeof body?.articleId === 'string' ? body.articleId : '';
        const sessionId = typeof body?.sessionId === 'string' ? body.sessionId : '';
        const value = body?.value === 'like' || body?.value === 'dislike' ? body.value : null;

        if (!articleId || !sessionId || !value) {
            return NextResponse.json({ error: 'Missing vote data.' }, { status: 400 });
        }

        const result = setVoteForSession(articleId, sessionId, value);
        if (!result) {
            return NextResponse.json({ error: 'Unable to save vote.' }, { status: 404 });
        }

        return NextResponse.json({ success: true, ...result }, { status: 200 });
    } catch {
        return NextResponse.json({ error: 'Unable to submit vote.' }, { status: 500 });
    }
}

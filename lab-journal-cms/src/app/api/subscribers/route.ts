import { NextResponse } from 'next/server';
import { sendSubscriptionConfirmationEmail } from '../../../lib/mail';
import { getSubscribers, subscribeUser } from '../../../lib/posts';

export async function GET() {
    return NextResponse.json({ subscribers: getSubscribers() });
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const email = typeof body?.email === 'string' ? body.email : '';

        if (!email.trim()) {
            return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
        }

        const result = subscribeUser(email);
        if (!result.ok) {
            return NextResponse.json({ error: result.error }, { status: 400 });
        }

        const emailResult = await sendSubscriptionConfirmationEmail({ to: email, confirmUrl: `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}/lab-journal` });

        return NextResponse.json({
            success: true,
            subscriber: result.subscriber,
            emailStatus: emailResult,
        }, { status: 201 });
    } catch {
        return NextResponse.json({ error: 'Unable to subscribe.' }, { status: 500 });
    }
}

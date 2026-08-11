import { NextResponse } from 'next/server';
import { sendRecallEmail } from '../../../lib/mail';

export async function POST(request: Request) {
    const body = await request.json();

    const subscribers = [body.to ?? 'aarushsrivastava04@gmail.com'];

    const emailBody = `We are sorry, but this article has been recalled.

Meanwhile, check out our other articles!
${body.link}`;

    const emailResult = await sendRecallEmail({
        to: body.to ?? 'aarushsrivastava04@gmail.com',
        title: body.title,
        link: body.link,
        verificationCode: body.verificationCode,
        message: body.message ?? emailBody,
    });

    console.log('Recall notification queued', {
        subscribers,
        title: body.title,
        emailBody,
        emailResult,
    });

    return NextResponse.json({ ok: true, subscribers, message: emailBody, emailResult });
}

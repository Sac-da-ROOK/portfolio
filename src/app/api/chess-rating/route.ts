import { NextResponse } from "next/server";
import { fetchLatestChessRating, RATING_REVALIDATE_SECONDS } from "@/lib/chess";

export const revalidate = 21600;

export async function GET() {
    const rating = await fetchLatestChessRating();

    return NextResponse.json(rating, {
        status: 200,
        headers: {
            "Cache-Control": `s-maxage=${RATING_REVALIDATE_SECONDS}, stale-while-revalidate=86400`,
        },
    });
}
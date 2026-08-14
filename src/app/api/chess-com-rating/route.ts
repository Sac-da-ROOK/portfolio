import { NextResponse } from "next/server";

const PROFILE_URL = "https://www.chess.com/member/cr7isgoatttt";

export async function GET() {
    try {
        const response = await fetch(
            "https://api.chess.com/pub/player/cr7isgoatttt/stats",
            {
                cache: "no-store",
                headers: {
                    "User-Agent": "aarushsrivastava.me chess rating tracker",
                    Accept: "application/json",
                },
            }
        );

        if (!response.ok) {
            return NextResponse.json(
                {
                    status: "unavailable",
                    error: `Chess.com API returned ${response.status}.`,
                    profileUrl: PROFILE_URL,
                },
                { status: response.status }
            );
        }

        const data = await response.json();
        const fetchedAt = new Date().toISOString();
        const rating = data.chess_rapid?.last?.rating;

        if (typeof rating !== "number") {
            return NextResponse.json({
                status: "unavailable",
                error: "Chess.com Rapid rating was not found.",
                profileUrl: PROFILE_URL,
            });
        }

        return NextResponse.json({
            status: "ok",
            rating,
            profileUrl: PROFILE_URL,
            fetchedAt,
        });
    } catch (error) {
        return NextResponse.json(
            {
                status: "unavailable",
                error:
                    error instanceof Error
                        ? error.message
                        : "Unable to fetch Chess.com rating.",
                profileUrl: PROFILE_URL,
            },
            { status: 500 }
        );
    }
}
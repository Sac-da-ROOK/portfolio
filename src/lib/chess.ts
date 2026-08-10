const US_CHESS_API_BASE = "https://ratings-api.uschess.org/api/v1";
const US_CHESS_MEMBER_ID = "31082517";
const RATING_REVALIDATE_SECONDS = 21600;

type UsChessMemberEventsResponse = {
    items: Array<{
        id: string;
        name: string;
        startDate: string;
        endDate: string;
    }>;
};

type UsChessMemberSectionsResponse = {
    items: Array<{
        sectionName: string;
        event: {
            id: string;
            name: string;
            startDate: string;
            endDate: string;
        };
        ratingRecords: Array<{
            preRating: number;
            postRating: number;
            ratingSource: string;
        }>;
    }>;
};

export type ChessRatingResult =
    | {
        status: "ok";
        rating: number;
        previousRating: number;
        eventId: string;
        eventName: string;
        eventUrl: string;
        profileUrl: string;
        sectionName: string;
        lastUpdated: string;
    }
    | {
        status: "unavailable";
        error: string;
        profileUrl: string;
    };

const profileUrl = `https://ratings.uschess.org/player/${US_CHESS_MEMBER_ID}`;

async function fetchUsChessJson<T>(path: string): Promise<T> {
    const response = await fetch(`${US_CHESS_API_BASE}${path}`, {
        headers: {
            Accept: "application/json",
        },
        next: { revalidate: RATING_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
        throw new Error(`US Chess API returned ${response.status}.`);
    }

    return response.json() as Promise<T>;
}

function unavailable(error: string): ChessRatingResult {
    return {
        status: "unavailable",
        error,
        profileUrl,
    };
}

export async function fetchLatestChessRating(): Promise<ChessRatingResult> {
    try {
        const events = await fetchUsChessJson<UsChessMemberEventsResponse>(`/members/${US_CHESS_MEMBER_ID}/events?Offset=0&Size=1`);
        const latestEvent = events.items[0];

        if (!latestEvent) {
            return unavailable("No completed US Chess events were found.");
        }

        const sections = await fetchUsChessJson<UsChessMemberSectionsResponse>(`/members/${US_CHESS_MEMBER_ID}/sections?Offset=0&Size=20`);
        const latestSection = sections.items.find((item) => item.event.id === latestEvent.id);

        if (!latestSection) {
            return unavailable("The latest tournament section could not be identified.");
        }

        const regularRating = latestSection.ratingRecords.find((record) => record.ratingSource === "R");

        if (!regularRating) {
            return unavailable("The latest regular rating is not available.");
        }

        return {
            status: "ok",
            rating: regularRating.postRating,
            previousRating: regularRating.preRating,
            eventId: latestEvent.id,
            eventName: latestEvent.name,
            eventUrl: `https://ratings.uschess.org/event/${latestEvent.id}`,
            profileUrl,
            sectionName: regularRating.ratingSource,
            lastUpdated: latestEvent.endDate,
        };
    } catch (error) {
        return unavailable(error instanceof Error ? error.message : "Unable to load the current US Chess rating.");
    }
}

export { RATING_REVALIDATE_SECONDS, US_CHESS_MEMBER_ID, profileUrl as US_CHESS_PROFILE_URL };
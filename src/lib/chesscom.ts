export const CHESS_COM_PROFILE_URL =
    "https://www.chess.com/member/cr7isgoatttt";

export type ChessComRapidResult =
    | {
        status: "ok";
        rating: number;
        profileUrl: string;
        fetchedAt: string;
    }
    | {
        status: "unavailable";
        error: string;
        profileUrl: string;
    };





export interface Status {
    abstractGameState: string;
    codedGameState: string;
    detailedState: string;
    statusCode: string;
    abstractGameCode: string;
}

export interface LeagueRecord {
    wins: number;
    losses: number;
    pct: string;
}

export interface Team {
    id: number;
    name: string;
    link: string;
}

export interface Away {
    leagueRecord: LeagueRecord;
    team: Team;
    splitSquad: boolean;
    seriesNumber: number;
}

export interface LeagueRecord2 {
    wins: number;
    losses: number;
    pct: string;
}

export interface Team2 {
    id: number;
    name: string;
    link: string;
}

export interface Home {
    leagueRecord: LeagueRecord2;
    team: Team2;
    splitSquad: boolean;
    seriesNumber: number;
}

export interface Teams {
    away: Away;
    home: Home;
}

export interface Venue {
    id: number;
    name: string;
    link: string;
}

export interface Content {
    link: string;
}

export interface Game {
    gamePk: number;
    link: string;
    gameType: string;
    season: string;
    gameDate: Date;
    status: Status;
    teams: Teams;
    venue: Venue;
    content: Content;
    gameNumber: number;
    publicFacing: boolean;
    doubleHeader: string;
    gamedayType: string;
    tiebreaker: string;
    calendarEventID: string;
    seasonDisplay: string;
    dayNight: string;
    description: string;
    scheduledInnings: number;
    gamesInSeries: number;
    seriesGameNumber: number;
    recordSource: string;
    ifNecessary: string;
    ifNecessaryDescription: string;
}

export interface Date {
    date: string;
    totalItems: number;
    totalEvents: number;
    totalGames: number;
    totalGamesInProgress: number;
    games: Game[];
    events: any[];
}

export interface ScheduledDay {
    copyright: string;
    totalItems: number;
    totalEvents: number;
    totalGames: number;
    totalGamesInProgress: number;
    dates: Date[];
}


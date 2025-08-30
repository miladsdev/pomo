export type Mode = 'study' | 'rest'

export interface Round {
    mode: Mode,
    minutes: number
}

export interface RoundRecord {
    index: number,
    round: Round,
    date: number
}
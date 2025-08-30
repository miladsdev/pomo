export type Mode = 'study' | 'rest'

export interface Round {
    mode: Mode,
    minutes: number
}
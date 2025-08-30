import type { Round } from "./types";

export class PomodoroRoundGenerator {
    private sequence: Round[] = [
        {mode: 'study', minutes: 25},
        {mode: 'rest', minutes: 5},
        {mode: 'study', minutes: 25},
        {mode: 'rest', minutes: 5},
        {mode: 'study', minutes: 25},
        {mode: 'rest', minutes: 5},
        {mode: 'study', minutes: 25},
        {mode: 'rest', minutes: 15},
    ];

    private index = 0;

    next(): Round {
        const round = this.sequence[this.index];
        this.index = (this.index + 1) % this.sequence.length;

        return round;
    }

    reset(): Round {
        this.index = 0;
        return this.sequence[0];
    }
}
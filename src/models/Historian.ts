import { ref, type Ref } from "vue";
import type { Round, RoundRecord } from "./types";

export class Historian {
    private records = ref<RoundRecord[]>([]);

    addRound(round: Round) {
        this.records.value.push({
            round: round,
            date: Date.now()
        });
    }

    getRecords(): Ref<RoundRecord[]> {
        return this.records;
    }
}
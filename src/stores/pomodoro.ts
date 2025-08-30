import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Mode, Round } from '@/models/types';
import { PomodoroRoundGenerator } from '@/models/PomodoroRoundGenerator';

let timer: number | null = null;

export const usePomodoroStore = defineStore('pomodoro', () => {
  const minutes = ref<number>(25);
  const seconds = ref<number>(0);
  const isTicking = ref(false);
  const generator = new PomodoroRoundGenerator();
  const round = ref<Round>(generator.next());

  const play = () => {
    if (!timer) {
      timer = setInterval(() => {
        if (!isTicking.value) return; // paused

        if (seconds.value === 0) {
          if (minutes.value === 0) {
            clearInterval(timer!);
            timer = null;
            isTicking.value = false;
            return;
          }
          minutes.value--;
          seconds.value = 59;
        } else {
          seconds.value--;
        }
      }, 1000);
    }

    isTicking.value = true; // start or resume
  }

  const pause = () => {
    isTicking.value = false; // just pause, interval still exists
  }

  const skip = () => {
    isTicking.value = false;

    round.value = generator.next();
    minutes.value = round.value.minutes;
    seconds.value = 0;
    
    timer = null;
  }

  return { round, minutes, seconds, isTicking, play, pause, skip }
})

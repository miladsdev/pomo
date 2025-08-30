import { ref } from 'vue'
import { defineStore } from 'pinia'

let studyTimer: number | null = null;

export const useTimerStore = defineStore('timer', () => {
  const minutes = ref<number>(25);
  const seconds = ref<number>(0);
  const isTicking = ref(false);

  const startStudy = () => {
    if (!studyTimer) {
      studyTimer = setInterval(() => {
        if (!isTicking.value) return; // paused

        if (seconds.value === 0) {
          if (minutes.value === 0) {
            clearInterval(studyTimer!);
            studyTimer = null;
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

  const stop = () => {
    isTicking.value = false; // just pause, interval still exists
  }

  const reset = () => {
    minutes.value = 25;
    seconds.value = 0;
    isTicking.value = false;
  }

  return { minutes, seconds, isTicking, startStudy, stop, reset }
})

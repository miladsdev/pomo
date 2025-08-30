import { ref } from 'vue'
import { defineStore } from 'pinia'

let timer: number | null = null;

export const usePomodoroStore = defineStore('pomodoro', () => {
  const minutes = ref<number>(25);
  const seconds = ref<number>(0);
  const isTicking = ref(false);
  const mode = ref<'rest' | 'study'>('study');

  const start = () => {
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

  const stop = () => {
    isTicking.value = false; // just pause, interval still exists
  }

  const skip = () => {
    isTicking.value = false;

    if (mode.value === 'study')
      mode.value = 'rest';
    else 
      mode.value = 'study';

    timer = null;
  }

  return { mode, minutes, seconds, isTicking, start, stop, skip }
})

// src/utils/sound.js
export function playSound(name) {
  try {
    new Audio(`/sounds/${name}.mp3`).play();
  } catch {
    /* ignore */
  }
}

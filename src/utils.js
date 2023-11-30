export function lerp(a, b, alpha) {
  return a + alpha * (b - a);
}

export function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

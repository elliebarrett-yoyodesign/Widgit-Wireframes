// Site-wide reduced-motion preference.
// The viewer's explicit choice (footer toggle) wins; otherwise we follow the OS setting
// (prefers-reduced-motion). The result is written to <html data-motion="reduce|full">, which
// style.css uses to switch off animations and transitions everywhere, and components that run
// their own motion in script (e.g. wf-symbol-arc) listen for the change event.

const KEY = 'wf-motion'
export const MOTION_EVENT = 'wf-motion-change'

type Choice = 'reduce' | 'full' | null

function storedChoice(): Choice {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'reduce' || v === 'full' ? v : null
  } catch {
    return null
  }
}

function osPrefersReduced(): boolean {
  return typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function motionReduced(): boolean {
  return document.documentElement.dataset.motion === 'reduce'
}

function apply() {
  const choice = storedChoice()
  const reduce = choice ? choice === 'reduce' : osPrefersReduced()
  document.documentElement.dataset.motion = reduce ? 'reduce' : 'full'
  window.dispatchEvent(new CustomEvent(MOTION_EVENT, { detail: { reduce } }))
}

export function setMotionReduced(reduce: boolean) {
  try {
    localStorage.setItem(KEY, reduce ? 'reduce' : 'full')
  } catch {
    /* storage unavailable: the choice still applies for this page view */
    document.documentElement.dataset.motion = reduce ? 'reduce' : 'full'
    window.dispatchEvent(new CustomEvent(MOTION_EVENT, { detail: { reduce } }))
    return
  }
  apply()
}

export function initMotion() {
  apply()
  if (typeof matchMedia === 'function') {
    matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', () => {
      if (!storedChoice()) apply()
    })
  }
}

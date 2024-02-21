import { createContext } from "react";

export const defaultAnimationSettings = {
    x: 0,
    y: 0,
    opacity: 100,
    scale: 1,
    blur: 0,
    speed: 0,
    delay: 0,
    easing: 'linear',
    replay: false
}

type AnimationSettings = typeof defaultAnimationSettings;

type AnimationContext = {
    settings: AnimationSettings,
    setSettings: (s: AnimationSettings) => void
}

const defaultValue = {
    settings: defaultAnimationSettings,
    setSettings: () => null
}

export const AnimationContext = createContext<AnimationContext>(defaultValue);
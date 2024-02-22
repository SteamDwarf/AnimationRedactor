import { createContext } from "react";

export const defaultAnimationSettings = {
    x: '0',
    y: '0',
    opacity: '1',
    scale: '1',
    blur: '0',
    speed: '0',
    delay: '0',
    easing: 'linear',
    replay: false
}

export type AnimationSettings = typeof defaultAnimationSettings;
export type SettingsSetter = (settings: AnimationSettings) => void;

type AnimationContext = {
    choosedElementId: string,
    settings: AnimationSettings,
    changeSettings: (s: AnimationSettings) => void
    chooseElement: (elementId: string, s: AnimationSettings, setElementSettings: SettingsSetter) => void
}

const defaultValue = {
    choosedElementId: '',
    settings: defaultAnimationSettings,
    changeSettings: () => null,
    chooseElement: () => null
}

export const AnimationContext = createContext<AnimationContext>(defaultValue);
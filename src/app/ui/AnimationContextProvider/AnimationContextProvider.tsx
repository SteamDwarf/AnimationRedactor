import { AnimationContext, AnimationSettings, SettingsSetter, defaultAnimationSettings } from "app/context";
import { FC, PropsWithChildren, useState } from "react";

interface IElementAnimation {
    elementId: string,
    settings: AnimationSettings,
    setElementSettings: SettingsSetter
}

const defaultElementAnimation:IElementAnimation = {
    elementId: '',
    settings: defaultAnimationSettings,
    setElementSettings: () => null
}

export const AnimationContextProvider:FC<PropsWithChildren> = ({children}) => {
    const [settings, setSettings] = useState(defaultAnimationSettings);
    const [elementAnimation, setElementAnimation] = useState(defaultElementAnimation);
    
    const chooseElement = (elementId: string, s: AnimationSettings, setElementSettings: SettingsSetter) => {
        setElementAnimation({elementId, settings: s, setElementSettings});
        setSettings(s);
    }

    const changeSettings = (settings: AnimationSettings) => {
        setSettings(settings);
        elementAnimation.setElementSettings(settings);
    }

    const value = {choosedElementId: elementAnimation.elementId, changeSettings, settings, chooseElement}

    return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>
}
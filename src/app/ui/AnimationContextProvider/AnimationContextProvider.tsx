import { AnimationContext, AnimationSettings, SettingsSetter, defaultAnimationSettings } from "app/context";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { getSettingsFromLS, setSettingsToLS } from "shared/api";

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
    const [isPlay, setIsPlay] = useState(false);

    const chooseElement = (elementId: string, s: AnimationSettings, setElementSettings: SettingsSetter) => {
        const savedSettings = getSettingsFromLS(elementId);

        if(savedSettings) {
            setElementSettings(savedSettings);
            setSettings(savedSettings);
        } else {
            setSettings(s);
        }
        setElementAnimation({elementId, settings: s, setElementSettings});
    }

    const changeSettings = (settings: AnimationSettings) => {
        if(elementAnimation.elementId) {
            setSettingsToLS(elementAnimation.elementId, settings)
        }
        setSettings(settings);
        elementAnimation.setElementSettings(settings);
    }

    const resetChosedElement = () => {
        setElementAnimation(defaultElementAnimation);
    }

    const value = {
        isPlay,
        choosedElementId: elementAnimation.elementId, 
        changeSettings, 
        settings, 
        chooseElement,
        setIsPlay,
        resetChosedElement
    }

    useEffect(() => {
    },)

    return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>
}
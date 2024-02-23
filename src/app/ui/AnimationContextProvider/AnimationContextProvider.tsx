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
    const [isPlay, setIsPlay] = useState(false);

    const chooseElement = (elementId: string, s: AnimationSettings, setElementSettings: SettingsSetter) => {
        const savedSettings = localStorage.getItem(elementId);

        if(savedSettings) {
            const parsedSettings = JSON.parse(savedSettings)

            setElementSettings(parsedSettings);
            setSettings(parsedSettings);
        } else {
            setSettings(s);
        }
        setElementAnimation({elementId, settings: s, setElementSettings});
    }

    const changeSettings = (settings: AnimationSettings) => {
        if(elementAnimation.elementId) {
            localStorage.setItem(elementAnimation.elementId, JSON.stringify(settings));
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

    return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>
}
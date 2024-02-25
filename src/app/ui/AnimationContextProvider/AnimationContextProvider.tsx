import { AnimationContext, AnimationSettings, SettingsSetter, defaultAnimationSettings } from "app/context";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getSettingsFromLS, setSettingsToLS } from "shared/api";

interface IElementAnimation {
    elementId: string,
    settings: AnimationSettings,
    setElementSettings: SettingsSetter
}

type SubscribersDictionary = Record<string, () => void>;


const defaultElementAnimation:IElementAnimation = {
    elementId: '',
    settings: defaultAnimationSettings,
    setElementSettings: () => null
}

export const AnimationContextProvider:FC<PropsWithChildren> = ({children}) => {
    const [settings, setSettings] = useState(defaultAnimationSettings);
    const [elementAnimation, setElementAnimation] = useState(defaultElementAnimation);
    const [isPlay, setIsPlay] = useState(false);
    const [onPreview, setOnPreview] = useState(false);
    const {pathname} = useLocation();
    const [animationSubscribers, setAnimationSubscribers] = useState<SubscribersDictionary>({});

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

    const subscribeAnimation = (elementId: string, handler: () => void) => {
        setAnimationSubscribers((state) => {
            return {...state, [elementId]: handler}
        })
    }

    const playAnimation = () => {
        Object.values(animationSubscribers).forEach(h => h())
    }

    const value = {
        onPreview,
        isPlay,
        choosedElementId: elementAnimation.elementId, 
        changeSettings, 
        settings, 
        chooseElement,
        setIsPlay,
        resetChosedElement,
        subscribeAnimation,
        playAnimation
    }

    useEffect(() => {
        setOnPreview(pathname === '/preview');
        //setIsPlay(pathname === '/preview');
    }, [pathname])

    return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>
}
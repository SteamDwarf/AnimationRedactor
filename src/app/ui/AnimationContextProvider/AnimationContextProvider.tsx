import { AnimationContext, defaultAnimationSettings } from "app/context";
import { FC, PropsWithChildren, useState } from "react";

export const AnimationContextProvider:FC<PropsWithChildren> = ({children}) => {
    const [settings, setSettings] = useState(defaultAnimationSettings);
    const value = {setSettings, settings}

    return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>
}
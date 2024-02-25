import { AnimationContext, AnimationSettings, defaultAnimationSettings } from "app/context";
import { ComponentType, RefObject, useContext, useEffect, useRef, useState } from "react";
import { IComponent } from "shared/UIKit/interfaces";
import styles from './withAnimation.module.css';
import { classNames } from "./classNames";
import { getSettingsFromLS } from "shared/api";

const stylesToSettings = (styles: CSSStyleDeclaration) => {
    //const transition = styles.transition.split(' ');

    const settings = {
        ...defaultAnimationSettings,
        x: styles.translate.split(' ')[0]?.slice(0, -2) || defaultAnimationSettings.x,
        y: styles.translate.split(' ')[1]?.slice(0, -2) || defaultAnimationSettings.y,
        opacity: styles.opacity || defaultAnimationSettings.opacity,
        scale: styles.scale || defaultAnimationSettings.scale,
        blur: styles.filter.slice(4, -3) || defaultAnimationSettings.blur,
    }

    return settings;
}

const setStyle = (
    element: RefObject<HTMLElement>, 
    settings: AnimationSettings,
    setTransition = false
) => {
    if(!element.current) return;

    element.current.style.translate = `${settings.x}px ${settings.y}px`;
    element.current.style.opacity = `${settings.opacity}`;
    element.current.style.scale = `${settings.scale}`;
    element.current.style.filter = `blur(${settings.blur}px)`;

    if(setTransition) {
        element.current.style.transition = `all ${settings.speed}s ${settings.easing} ${settings.delay}s`;
    }
        
}

/* const playAnimation = (element: RefObject<HTMLElement>, settings: AnimationSettings) => {
    if(element.current) {
        setStyle(element, settings);
        
    }
} */


export const withAnimation = <T extends IComponent>(Child:ComponentType<T>) => (props: T) => {
    const [startSettings, setStartSettings] = useState(defaultAnimationSettings);
    const [endSettings, setEndSettings] = useState(defaultAnimationSettings);
    const {chooseElement, choosedElementId, subscribeAnimation, onPreview} = useContext(AnimationContext);
    const projectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLElement>(null);
    const mainElementRef = useRef<HTMLElement>(null);

    const onClick = () => {
        if(onPreview) return;

        chooseElement(props.id || '', startSettings, setStartSettings);
    }

    const changeSettings = () => {
        if(projectionRef.current && containerRef.current) {
            containerRef.current.style.translate = `${startSettings.x}px ${startSettings.y}px`;
            projectionRef.current.style.opacity = `${startSettings.opacity}`; // не действует
            containerRef.current.style.scale = `${startSettings.scale}`;
            containerRef.current.style.filter = `blur(${startSettings.blur}px)`;
        }
    }

    const loadAnimationSettings = () => {
        const settings = getSettingsFromLS(props.id || '');
        
        if(!settings) return
        
        setStartSettings(settings);
    }
    const playAnimation = () => {
        if(mainElementRef.current) {
            mainElementRef.current.style.transition = '';
            setStyle(mainElementRef, startSettings)
            setTimeout(() => {
                if(mainElementRef.current) {
                    mainElementRef.current.style.transition = `all ${startSettings.speed}s ${startSettings.easing} ${startSettings.delay}s`;
                }
                setStyle(mainElementRef, endSettings);
            });
        }
    }

    useEffect(changeSettings, [startSettings])
    useEffect(loadAnimationSettings, [props.id]);
    useEffect(() => {
        if(props.id) {
            subscribeAnimation(props.id, playAnimation)
        }
    }, [props.id, startSettings])

    return(
        <div className={styles.container}>
            <div
                onClick={onClick} 
                ref={mainElementRef as any}
                className={classNames(
                    styles.elementContainer,
                    {[styles.choosed]: choosedElementId === props.id}
                )}
            >
                <Child 
                    {...props} 
                    className={classNames(
                        styles.mainElement, 
                        props.className,
                    )}
                />
            </div>
            {/* <div
                className={classNames([styles.choosed]: choosedElementId === props.id)}
                onClick={onClick} 
                ref={mainElementRef as any}
            >
                <Child 
                    {...props} 
                    className={classNames(
                        styles.mainElement, 
                        props.className,
                    )}
                    
                />
            </div> */}
            
            <div ref={containerRef as any} className={classNames(
                    styles.projectionHolder, 
                    {[styles.visible]: choosedElementId === props.id}
                )} >
                <Child 
                    {...props} 
                    className={props.className}
                    ref={projectionRef}
                />
            </div>
        </div>
         
    );
}
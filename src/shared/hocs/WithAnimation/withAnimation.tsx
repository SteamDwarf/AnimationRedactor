import { AnimationContext, AnimationSettings, defaultAnimationSettings } from "app/context";
import { ComponentType, LegacyRef, RefObject, useContext, useEffect, useRef, useState } from "react";
import { IComponent } from "shared/UIKit/interfaces";
import styles from './withAnimation.module.css';
import { classNames } from "../../lib/classNames";
import { getSettingsFromLS } from "shared/api";

/* const stylesToSettings = (styles: CSSStyleDeclaration) => {
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
 */
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

export const withAnimation = <T extends IComponent>(Child:ComponentType<T>) => (props: T) => {
    const {
        chooseElement, 
        choosedElementId, 
        subscribeAnimation, 
        onPreview, 
        resetChosedElement
    } = useContext(AnimationContext);

    const [startSettings, setStartSettings] = useState(defaultAnimationSettings);
    const [endSettings] = useState(defaultAnimationSettings);
    const projectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLElement>(null);
    const mainElementRef = useRef<HTMLElement>(null);

    const loadAnimationSettings = () => {
        const settings = getSettingsFromLS(props.id || '');
        
        if(!settings) return
        
        setStartSettings(settings);
    }

    const onClick = () => {
        if(onPreview) return;

        if(choosedElementId === props.id) resetChosedElement();
        else chooseElement(props.id || '', startSettings, setStartSettings);
    }

    const changeSettings = () => {
        if(projectionRef.current && containerRef.current) {
            containerRef.current.style.translate = `${startSettings.x}px ${startSettings.y}px`;
            projectionRef.current.style.opacity = `${startSettings.opacity}`;
            containerRef.current.style.scale = `${startSettings.scale}`;
            containerRef.current.style.filter = `blur(${startSettings.blur}px)`;
        }

        if(props.id) {
            subscribeAnimation(props.id, playAnimation)
        }
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
            }, 100);
        }
    }

    useEffect(loadAnimationSettings, [props.id]);
    useEffect(changeSettings, [startSettings, props.id])
    useEffect(() => {
        if(onPreview) {
            loadAnimationSettings();
            playAnimation();
        }
    }, [onPreview])

    return(
        <div className={styles.container}>
            <div
                onClick={onClick} 
                ref={mainElementRef as LegacyRef<HTMLDivElement>}
                className={classNames(
                    styles.elementContainer,
                    {[styles.choosed]: choosedElementId === props.id}
                )}
            >
                <div className={styles.rect}></div>
                <div className={styles.rect}></div>
                <div className={styles.rect}></div>
                <div className={styles.rect}></div>

                <Child 
                    {...props} 
                    className={classNames(
                        styles.mainElement, 
                        props.className,
                    )}
                />
            </div>
            
            <div ref={containerRef as LegacyRef<HTMLDivElement>} className={classNames(
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
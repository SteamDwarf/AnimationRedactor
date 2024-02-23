import { AnimationContext, defaultAnimationSettings } from "app/context";
import { ComponentType, useContext, useEffect, useRef, useState } from "react";
import { IComponent } from "shared/UIKit/interfaces";
import styles from './withAnimation.module.css';
import { classNames } from "./classNames";


export const withAnimation = <T extends IComponent>(Child:ComponentType<T>) => (props: T) => {
    const [startSettings, setStartSettings] = useState(defaultAnimationSettings);
    const {chooseElement, choosedElementId, isPlay} = useContext(AnimationContext);
    const projectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLElement>(null);

    const onClick = () => {
        if(isPlay) return;

        chooseElement(props.id || '', startSettings, setStartSettings);
    }
    //const refedComponent = forwardRef((props) => <Child {...props} ref={ref}/>);

    useEffect(() => {
        if(projectionRef.current && containerRef.current) {
            containerRef.current.style.transform = `translate(${startSettings.x}px, ${startSettings.y}px)`;
            projectionRef.current.style.opacity = `${startSettings.opacity}`; // не действует
            containerRef.current.style.scale = `${startSettings.scale}`;
            //ref.current.style.animation = `${settings.scale}`;
        }
    }, [startSettings])

    return(
        <div className={styles.container}>
            <Child 
                {...props} 
                className={classNames(
                    styles.mainElement, 
                    props.className,
                    {[styles.choosed]: choosedElementId === props.id}
                )}
                onClick={onClick} 
            />
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
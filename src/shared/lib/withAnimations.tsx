import { AnimationContext, defaultAnimationSettings } from "app/context";
import { ComponentType, forwardRef, useContext, useEffect, useRef, useState } from "react";
import { IComponent } from "shared/UIKit/interfaces";
import { withRef } from "./withRef";
import styles from './withAnimation.module.css';
import { classNames } from "./classNames";

//export function AnimatedElement<T>(Child: ComponentType<T>)

export const withAnimation = <T extends IComponent>(Child:ComponentType<T>) => (props: T) => {
    const [settings, setSettings] = useState(defaultAnimationSettings);
    const {chooseElement, choosedElementId} = useContext(AnimationContext);
    const ref = useRef<HTMLElement>(null);

    const onClick = () => {
        chooseElement(props.id || '', settings, setSettings);
    }

    //const refedComponent = forwardRef((props) => <Child {...props} ref={ref}/>);

    useEffect(() => {
        if(ref.current) {
            ref.current.style.transform = `translate(${settings.x}px, ${settings.y}px)`;
            ref.current.style.opacity = `${settings.opacity}`; // не действует
            ref.current.style.scale = `${settings.scale}`;
            ref.current.style.animation = `${settings.scale}`;
        }
    }, [settings])

    return(
        <div className={styles.container}>
            <Child 
                {...props} 
                className={classNames(styles.mainElement, {[styles.choosed]: choosedElementId === props.id})}
                onClick={onClick} 
            />
            <Child 
                {...props} 
                className={styles.projection}
                ref={ref}
            />
        </div>
         
    );
}
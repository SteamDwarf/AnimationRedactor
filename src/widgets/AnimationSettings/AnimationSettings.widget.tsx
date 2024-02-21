import { FC, useContext } from 'react';
import styles from './AnimationSettings.module.css';
import { classNames } from 'shared/lib';
import { AnimationProperty } from 'features/AnimationProperty';
import { AnimationContext } from 'app/context';

interface IAnimationSettings {
    className?: string
}

export const AnimationSettings:FC<IAnimationSettings> = ({className}) => {
    const {settings} = useContext(AnimationContext);

    return (
        <aside className={classNames(styles.container, className)}>
            <AnimationProperty type='range' name='X' value={settings.x} textValue='80'/>
            <AnimationProperty type='range' name='Y' value={settings.y} textValue='30'/>
            <AnimationProperty type='range' name='Opacity' value={settings.opacity} textValue='55%'/>
            <AnimationProperty type='range' name='Scale' value={settings.scale} textValue='1.2'/>
            <AnimationProperty type='range' name='Blur' value={settings.blur} textValue='8'/>
            <AnimationProperty type='range' name='Speed' value={settings.speed} textValue='.3s'/>
            <AnimationProperty type='range' name='Delay' value={settings.delay} textValue='0s'/>
            <AnimationProperty type='select' name='Easing' value={settings.easing}>
                <option value="ease">Ease</option>
                <option value="ease-in">Ease-in</option>
                <option value="ease-out">Ease-out</option>
                <option value="ease-in-out">Ease-in-out</option>
                <option value="linear">Linear</option>
                <option value="step-start">Step-end</option>
            </AnimationProperty>
            <AnimationProperty type='checkbox' name='Replay' value={settings.replay}/>
        </aside>
    );
}
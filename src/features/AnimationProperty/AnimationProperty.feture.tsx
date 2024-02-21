import { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './AnimationProperty.module.css';
import { Select } from 'shared/UIKit/Select';
import { Input } from 'shared/UIKit/Input';

type Property = 'range' | 'select' | 'checkbox'

interface IAnimationProperty extends PropsWithChildren {
    name: string
    value: number | string | boolean
    textValue?: string
    type: Property
}

const getElement = (type: Property, value: number | string | boolean, children?: ReactNode) => {
    if(type === 'checkbox' && typeof value === 'boolean') {
        return <Input className={styles.input} type={type} checked={value}/>
    }

    if(typeof value === 'boolean') return
    
    if(type === 'select') {
        return <Select value={value}>{children}</Select>
    }

    return <Input className={styles.input} value={value} type={type}/>
}

export const AnimationProperty:FC<IAnimationProperty> = ({name, value, textValue, type, children}) => {
    return (
        <div className={styles.slider}>
            <span className={styles.name}>{name}</span>
            {getElement(type, value, children)}
            {textValue && <span className={styles.textValue}>{textValue}</span>}
        </div>
    );
}
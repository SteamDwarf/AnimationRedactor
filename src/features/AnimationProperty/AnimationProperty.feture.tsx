import { ChangeEvent, FC, PropsWithChildren, ReactNode } from 'react';
import styles from './AnimationProperty.module.css';
import { Select } from 'shared/UIKit/Select';
import { Input } from 'shared/UIKit/Input';

type Property = 'range' | 'select' | 'checkbox'

interface IAnimationProperty extends PropsWithChildren {
    title: string
    name: string
    type: Property
    onChange: (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => void
    max?: number
    min?: number
    textValue?: string
    step?: number
    value?: number | string
}

const getElement = (
    name: string,
    type: Property, 
    onChange: (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => void,
    step: number,
    max: number,
    min: number,
    children?: ReactNode,
    value?: number | string,
) => {

    if(type === 'checkbox') {
        return <Input name={name} onChange={onChange} className={styles.input} type={type}/>
    }

    /* if(typeof value === 'boolean') return */
    
    if(type === 'select') {
        return <Select name={name} onChange={onChange} value={value}>{children}</Select>
    }

    return (
        <Input 
            max={max}
            min={min}
            step={step} 
            name={name} 
            onChange={onChange} 
            className={styles.input} 
            value={value} 
            type={type}
        />
    )
}

export const AnimationProperty:FC<IAnimationProperty> = ({
    title,
    name, 
    value, 
    textValue, 
    type, 
    children,
    onChange,
    step = 1,
    max = 100,
    min = 0
}) => {
    return (
        <div className={styles.property}>
            <span className={styles.name}>{title}</span>
            {getElement(name, type, onChange, step, max, min, children, value)}
            {textValue && <span className={styles.textValue}>{textValue}</span>}
        </div>
    );
}
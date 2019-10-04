import React, { useEffect } from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useRedMode = (key, initialValue) => {
    const [style, setStyle] = useLocalStorage(key, initialValue)

    const body = document.querySelector("body");
    
    const styleChanges = useEffect(() => {
        if (style === true){
            body.classList.add('red-mode')
        } else {
            body.classList.remove('red-mode')
        }
    }, [style])

    return [style, styleChanges, setStyle]
};
import React, { useEffect } from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useLabelToggle = (key, initialValue) => {
    const [style, setStyle] = useLocalStorage(key, initialValue)

    const labels = document.querySelectorAll('.labels');
    console.log(labels)
    labels.forEach(item => {
        const newLabels = []
        newLabels.push(JSON.parse(item))
        return newLabels
    })
    const styleChanges = useEffect(() => {
        if (style === false){
            labels.classList.add('hide-labels')
        } 
    }, [style])

    return [style, styleChanges, setStyle]
};
import React, { useState, useEffect, useRef } from 'react'
import styles from "./fadeIn.module.css" 

export default function FadeIn(props) {

    const [isVisible, setVisible] = useState(false);
    const domRef = useRef(null);
    
    useEffect(()=>{
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry =>{ 
            if(entry.isIntersecting){
                setVisible(entry.isIntersecting)
            }
            });
        });

        if(domRef.current){
            observer.observe(domRef.current);
        }

        return () => {

        if(domRef.current){
            observer.unobserve(domRef.current);
        }
            observer.disconnect();
        }
    },[])

    return (
        <div className={`${styles['fade-in-section']} ${isVisible ? styles['is-visible'] : ''} `} ref={domRef}>
            {props.children}
        </div>
    )
}

import React, {useEffect, useRef} from 'react'
import {gsap} from 'gsap';

const Word = () => {
    let flex = useRef(null);

    useEffect(() => {
        const wordTl = gsap.timeline({yoyo: true, repeat: -1});
        wordTl.to(flex, {

        })
    }, []);

    return (
        <h1 ref={el => {flex = el}} className='flex'>flex</h1>  
    )
};

export default Word 
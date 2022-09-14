import React, {useEffect, useRef} from 'react'
import {gsap, normalize} from 'gsap';

const Words = () => {
    let container = useRef([]);
    container.current = [];

    const addToRefs = (el) => {
        if(el && !container.current.includes(el)){
            container.current.push(el);
        }
    };

    useEffect(() => {
        gsap.to('.container', 0, {css: {visibility: 'visible'}})
    }, []);

    return (
        <article ref={addToRefs} className="container">
            <Word/>
        </article>
    )
};

const Word = () => {
    let flex = useRef(null);

    useEffect(() => {
        const wordTl = gsap.timeline({repeat: -1});
        wordTl.fromTo(flex, {
            fontStretch: "0%",
            fontWeight: 200,
            letterSpacing: "0px",
        }, {
            fontStretch: "100%",
            duration: 0.6,
            ease: 'power1.inOut'
        }, 0.4)
        wordTl.to(flex, {
            fontWeight: 500,
            duration: 0.15,
            ease: 'power1.inOut',
        }, "+=0.7")
        // Animate Variable CSS tageting html
        wordTl.to('html', {
            '--italic': 1,
            duration: 0.15,
            ease: 'power1.inOut',
        }, '-=0.15')
        wordTl.to(flex, {
            fontStretch: "20%",
            fontWeight: 900,
            letterSpacing: "-25px",
            duration: 0.25,
            ease: 'power1.inOut',
        }, "+=0.7")
        wordTl.to('html', {
            '--italic': 0,
            duration: 0.15,
            ease: 'power1.inOut',
        }, "+=0.7")
        wordTl.to(flex, {
            fontStretch: "170%",
            fontWeight: 100,
            letterSpacing: "0px",
            duration: 0.15,
            ease: 'power1.inOut',
        }, "-=0.15")
        wordTl.to(flex, {
            fontStretch: "0%",
            letterSpacing: '-30px',
            duration: 0.2,
            ease: 'power1.inOut',
        }, "+=0.7")
        wordTl.to(flex, {
            fontWeight: 200,
            letterSpacing: "0px",
            duration: 0.2,
            ease: 'power1.inOut',
        }, '+=0.7')
    }, []);

    return (
        <h1 ref={el => {flex = el}} className='flex'>flex</h1>  
    )
};


export default Words 
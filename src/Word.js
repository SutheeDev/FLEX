import React, {useEffect, useRef} from 'react'
import {gsap} from 'gsap';

// const Words = () => {
//     let container = useRef(null);
            
//     useEffect(() => {
//         gsap.to(container, {
//             css: {visibility: 'visible'},
//             duration: 0,
//         })
//     }, []);

//     return (
//         <article ref={el => {container = el}} className="container">
//             <Word/>
//             <Word/>
//         </article>
//     )
// };

// const Word = () => {
//     let flex = useRef(null);

//     useEffect(() => {
//         const wordTimeline = () => {
//             const wordTl = gsap.timeline({repeat: -1});
//             wordTl.fromTo(flex, {
//                 fontStretch: "0%",
//                 fontWeight: 200,
//                 letterSpacing: "0px",
//             }, {
//                 fontStretch: "100%",
//                 duration: 0.6,
//                 ease: 'power1.inOut'
//             }, 0.4)
//             wordTl.to(flex, {
//                 fontWeight: 500,
//                 duration: 0.15,
//                 ease: 'power1.inOut',
//             }, "+=0.7")
//             // Animate Variable CSS tageting html
//             wordTl.to('html', {
//                 '--italic': 1,
//                 duration: 0.15,
//                 ease: 'power1.inOut',
//             }, '-=0.15')
//             wordTl.to(flex, {
//                 fontStretch: "20%",
//                 fontWeight: 900,
//                 letterSpacing: "-25px",
//                 duration: 0.25,
//                 ease: 'power1.inOut',
//             }, "+=0.7")
//             wordTl.to('html', {
//                 '--italic': 0,
//                 duration: 0.15,
//                 ease: 'power1.inOut',
//             }, "+=0.7")
//             wordTl.to(flex, {
//                 fontStretch: "170%",
//                 fontWeight: 100,
//                 letterSpacing: "0px",
//                 duration: 0.15,
//                 ease: 'power1.inOut',
//             }, "-=0.15")
//             wordTl.to(flex, {
//                 fontStretch: "0%",
//                 letterSpacing: '-30px',
//                 duration: 0.2,
//                 ease: 'power1.inOut',
//             }, "+=0.7")
//             wordTl.to(flex, {
//                 fontWeight: 200,
//                 letterSpacing: "0px",
//                 duration: 0.2,
//                 ease: 'power1.inOut',
//             }, '+=0.7')
//         };
//     }, []);

//     return (
//         <h1 ref={el => {flex = el}} className='flex'>flex</h1>  
//     )
// };

// const Words = () => {
//     let container = useRef(null);
            
//     useEffect(() => {
//         gsap.to(container, {
//             css: {visibility: 'visible'},
//             duration: 0,
//         })
//     }, []);

//     return (
//         <article ref={el => {container = el}} className="container">
//             <Word/>
//             <Word/>
//         </article>
//     )
// };

const Words = () => {
    let flexRef = useRef(null);
    let container = useRef(null);
            
    useEffect(() => {
        gsap.to(container, {
            css: {visibility: 'visible'},
            duration: 0,
        })
    }, []);

    useEffect(() => {
        const flex = document.querySelectorAll('.flex');
        const masterTimeline = [];
        flex.forEach((word) => {
            const wordTl = gsap.timeline({repeat: -1});
            // Step1 Stretch
            wordTl.fromTo(flex, {
                fontStretch: "0%",
                fontWeight: 200,
                letterSpacing: "0px",
            }, {
                fontStretch: "100%",
                duration: 0.3,
                ease: 'power1.inOut',
                stagger: {
                    amount: 0.3,
                }
            }, 0.2)
            // Step2.1 Thicken
            wordTl.to(flex, {
                fontWeight: 500,
                duration: 0.15,
                ease: 'power1.inOut',
                stagger: {
                    amount: 0.3,
                }
            }, "+=0.2")
            // Step2.2 Italicize by Animating Variable CSS tageting html
            // This begins at the same time with 2.1
            wordTl.to('html', {
                '--italic': 1,
                duration: 0.15,
                ease: 'power1.inOut',
                stagger: {
                    amount: 0.3,
                }
            }, '-=0.15')
            // Step3 decrease stretch & letter spacing, increase weight
            wordTl.to(flex, {
                fontStretch: "20%",
                fontWeight: 900,
                letterSpacing: "-25px",
                duration: 0.25,
                ease: 'power1.inOut',
                stagger: {
                    amount: 0.3,
                }
            }, "+=0.3")
            // Step4.1 Cancel italic
            wordTl.to('html', {
                '--italic': 0,
                duration: 0.15,
                ease: 'power1.inOut',
                stagger: {
                    amount: 0.3,
                }
            }, "+=0.3")
            // Step4.2 Increase strech & letter spacing, decrease weight
            // This begins at the same time with 4.2
            wordTl.to(flex, {
                fontStretch: "170%",
                fontWeight: 100,
                letterSpacing: "0px",
                duration: 0.15,
                ease: 'power1.inOut',
                stagger: {
                    amount: 0.3,
                }
            }, "-=0.15")
            // Step5 Decrease stretch & letter spacing
            wordTl.to(flex, {
                fontStretch: "0%",
                letterSpacing: '-30px',
                duration: 0.2,
                ease: 'power1.inOut',
                stagger: {
                    amount: 0.3,
                }
            }, "+=0.4")
            // Step6 Back to setting before step1
            wordTl.to(flex, {
                fontWeight: 200,
                letterSpacing: "0px",
                duration: 0.2,
                ease: 'power1.inOut',
                stagger: {
                    amount: 0.3,
                }
            }, '+=0.3')

            masterTimeline.push(wordTl);
        })

        // let main = gsap.timeline();
        masterTimeline.forEach((tl, i) => {
            tl.play(10);
        });

        


    }, []);

    return (
        <article ref={el => {container = el}} className="container">
            <h1 ref={el => {flexRef = el}} className='flex'>flex</h1>  
            <h1 ref={el => {flexRef = el}} className='flex'>flex</h1>  
            <h1 ref={el => {flexRef = el}} className='flex'>flex</h1>  
        </article>
    )
};


export default Words 
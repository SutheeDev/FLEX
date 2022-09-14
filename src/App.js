import React, {useEffect, useRef} from 'react'
import Word from './Word'
import {gsap} from 'gsap';

const App = () => {
  let container = useRef(null);

  useEffect(() => {
    gsap.to(container, 0, {css: {visibility: 'visible'}})
  }, []);

  return (
    <article ref={el => container = el} className="container">
      <Word/>    
    </article>
  )
};

export default App

import React from 'react';
import Typed from 'typed.js';

import {
    field,
    
} from "./hero.module.css"


function TypedText() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'How much for my dream kitchen? ', 
        'How much for my dream fence? ', 
        'How much for my dream deck? ',       
        
    ],
      typeSpeed: 75,
      backSpeed: 75,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className={field}>
        <div>
            <span ref={el} />
        </div>
    </div>
  );
}

export default TypedText
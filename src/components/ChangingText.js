import React from 'react';
import Typed from 'typed.js';

function ChangingText() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['deck', 'floor', 'wall', 'kitchen', 'fence', 'garden'],
      typeSpeed: 125,
      loop: true,
      showCursor: false,
      fadeOut: true,
      
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (

      <span ref={el}/>

  );
}

export default ChangingText
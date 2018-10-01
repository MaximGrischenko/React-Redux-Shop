import React from 'react';

const Logotype = () => {
  const url_x1 = "./assets/images/logotype.png";
  const url_x2 = "./assets/images/logotype-x2.png";
  return (
    <div>
      {
        window.devicePixelRatio > 1 ? (
          <img src={ url_x2 } alt="Market" />
        ) : (
          <img src={ url_x1 } alt="Market" />
        )
      }
    </div>
  )
};

export default Logotype;
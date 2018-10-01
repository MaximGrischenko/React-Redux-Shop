import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconHome from '@material-ui/icons/Home';

import styles from './not-allowed.style.css';

const NotAllowedComponent = () => {
  return (
    <div>
      <div>
        <div className={styles.content}>
          <div className={styles.blink_txt}>Oops! It was unexpected...</div>
          <div className={styles.description}>You have some troubles. The Web page you're looking for does not
            allow.<br/>Make sure you've got all permissions.
          </div>
          <div className={styles.flex_center_justified}>
            <Link to='/'>
              <Button
                color = "inherit">
               Back &nbsp;
                <IconHome />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="squiggly-0">
              <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" seed="0"/>
              <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="3"/>
            </filter>
            <filter id="squiggly-1">
              <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" seed="1"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="4"/>
            </filter>
            <filter id="squiggly-2">
              <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" seed="2"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="3"/>
            </filter>
            <filter id="squiggly-3">
              <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" seed="3"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="4"/>
            </filter>
            <filter id="squiggly-4">
              <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" seed="4"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="3"/>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default NotAllowedComponent;
import React from 'react';
import illustration from '../../assets/images/Illustration.png';
import go_button from '../../assets/images/go.png';

import {
  ONBOARDING_TEXT_LINE_1,
  ONBOARDING_TEXT_LINE_2,
} from '../../constants/strings';

import './onboarding.styles.scss';
import { Link } from 'react-router-dom';

const OnBoarding = () => {
  return (
    <section className='ob-section'>
      <div className='ob-col'>
        <div className='ob-img'>
          <img src={illustration} alt='' />
        </div>
        <h4>
          {ONBOARDING_TEXT_LINE_1}
          <br />
          {ONBOARDING_TEXT_LINE_2}
        </h4>
        <Link to= '/my-cloud'>
          <div className='ob-go'>
            <img src={go_button} alt='' />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default OnBoarding;

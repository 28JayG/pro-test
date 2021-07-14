import { IconChevronRight } from '@tabler/icons';
import { useState } from 'react';

import './options-tile.styles.scss';

const OptionsTile = ({ isSwitch, onClick, title, subtitle, active }) => {
  //active used only when switch is set to true
  const [switchActive, setActive] = useState(active);

  const handleClick = () => {
    if (isSwitch) {
      setActive(!switchActive);
    }

    onClick();
  };

  return (
    <div className='options-tile' onClick={handleClick}>
      <div className='ot-col'>
        <h3 className='ot-title'>{title}</h3>
        <p className='ot-subtitle'>{subtitle}</p>
      </div>
      {!isSwitch ? (
        <IconChevronRight className='ot-right-arrow' />
      ) : (
        <div className={`ot-switch ${switchActive ? 'active' : ''}`}>
          <div className={`toggle ${switchActive ? 'active' :'inactive'}`} />
        </div>
      )}
    </div>
  );
};

export default OptionsTile;

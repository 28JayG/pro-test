import { IconX } from '@tabler/icons';
import { useEffect, useRef } from 'react';
import { uploadOptions } from '../../../constants/upload-options';
import UploadOption from '../../common/upload-option/upload-option.component';

import './upload-curve.styles.scss';

const UploadCurve = ({ onClose, open }) => {
  const node = useRef();

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }

    onClose();
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const numberOfOptions = 3;
  //total availabe angle 180 deg
  const minimumOptionAngle = 180 / numberOfOptions;

  return (
    <div className='uc-bg'>
      <div className='uc-options-container' ref={node}>
        <div className='uc-row'>
          <UploadOption
            icon={uploadOptions[0].icon(24)}
            title={uploadOptions[0].title}
            marginTop={30}
          />
          <UploadOption
            icon={uploadOptions[1].icon(24)}
            title={uploadOptions[1].title}
          />
          <UploadOption
            icon={uploadOptions[2].icon(24)}
            title={uploadOptions[2].title}
            marginTop={30}
          />
        </div>

        <div className='uc-close' onClick={onClose}>
          <IconX />
        </div>
      </div>
    </div>
  );
};

export default UploadCurve;

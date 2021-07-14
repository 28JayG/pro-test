import { useState } from 'react';
import { FileTypes } from '../../../constants/file.types';
import FileIcon from '../../common/file-icon/file-icon.component';

import './file-type-filter.styles.scss';

const FileTypeFilter = () => {
  const [filter, setFilter] = useState('');

  return (
    <div className='ftf-row'>
      <div className='ftf-wrapper'>
        {Object.values(FileTypes).map((type) => (
          <FileIcon
            inline
            key={type.title}
            icon={type.icon(18)}
            title={type.title}
            size='lg'
            color={type.color()}
            backgroundColor={type.color(0.2)}
            onClick={() => setFilter(type.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default FileTypeFilter;

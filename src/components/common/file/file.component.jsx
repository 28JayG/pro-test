import { getFileType } from '../../../utils/utils';

import { IconDotsVertical } from '@tabler/icons';
import FileIcon from '../file-icon/file-icon.component';

import './file.styles.scss';

const File = ({ showTimesUsed, file }) => {
  const { size, ext, name } = file;
  const fileType = getFileType(ext);
  const fileSizeInGB = (Number(size) / Math.pow(1024, 2)).toFixed(1);

  return (
    <div className='file-tile'>
      <FileIcon
        icon={fileType.icon(12)}
        size='md'
        color={fileType.color()}
        backgroundColor={fileType.color(0.2)}
      />
      <div className='ft-details'>
        <p className='f-name'>{name}</p>
        <p className='f-type'>
          {ext} . {showTimesUsed ? `1 time` : `${fileSizeInGB} gb`}
        </p>
      </div>
      <IconDotsVertical className='file-options' />
    </div>
  );
};

export default File;

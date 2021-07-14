import { IconDotsVertical } from '@tabler/icons';

import './folder.styles.scss';
import SharerThumb from './sharer-thumb/sharer-thumb.component';

const Folder = ({ title, fileCount, totalSizeInGB, sharers }) => {
  return (
    <div className='folder'>
      <h5 className='fld-title'>{title}</h5>
      <h6 className='fld-subtext'>
        {fileCount}f.{totalSizeInGB}gb
      </h6>
      {/* folder options icon */}
      <div className='options-icon'>
        <IconDotsVertical />
      </div>

      <div className='sharers-row'>
        <SharerThumb />
        <SharerThumb />
        <SharerThumb />
        <SharerThumb />
      </div>
    </div>
  );
};

export default Folder;

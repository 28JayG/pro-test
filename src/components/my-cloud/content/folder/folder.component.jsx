import { getSharers } from '../../../../utils/utils';

import { IconDotsVertical } from '@tabler/icons';
import SharerThumb from './sharer-thumb/sharer-thumb.component';

import './folder.styles.scss';

const Folder = ({ title, fileCount, totalSize, sharers }) => {
  const totalSizeInGB = (totalSize / Math.pow(1024, 2)).toFixed(1);

  const sharersList = getSharers(sharers);

  return (
    <div className='folder'>
      <h5 className='fld-title'>{title}</h5>
      <h6 className='fld-subtext'>
        {fileCount}f | {totalSizeInGB}gb
      </h6>
      {/* folder options icon */}
      <div className='options-icon'>
        <IconDotsVertical />
      </div>

      <div className='sharers-row'>
        {sharersList.slice(0, 3).map((sharer) => (
          <SharerThumb sharer={sharer} key={sharer.id} />
        ))}
        {sharersList.length > 3 && (
          <SharerThumb showExtraCount excessCount={sharersList.length - 3} />
        )}
      </div>
    </div>
  );
};

export default Folder;

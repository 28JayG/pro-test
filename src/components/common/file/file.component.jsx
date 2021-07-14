import { IconDotsVertical } from '@tabler/icons';
import FileIcon from '../file-icon/file-icon.component';
import './file.styles.scss';

const File = ({ showTimesUsed, fileType }) => {
  return (
    <div className='file-tile'>
      <FileIcon
        icon={fileType.icon(18)}
        title={fileType.title}
        size='lg'
        color={fileType.color()}
        backgroundColor={fileType.color(0.2)}
      />
      <div className='ft-details'>
        {}.{showTimesUsed ? `1 time` : `2 gb`}
      </div>
      <IconDotsVertical className='file-options' />
    </div>
  );
};

export default File;

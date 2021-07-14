import { IconDotsVertical } from '@tabler/icons';
import './file.styles.scss';

const File = ({ showTimesUsed, file }) => {
  return (
    <div className='file-tile'>
        <div className='ft-icon' style={{backgroundColor:''}} />
        <div className='ft-details'>
            {}.{showTimesUsed? `1 time`: `2 gb`}
        </div>
      <IconDotsVertical className='file-options' />
    </div>
  );
};

export default File;

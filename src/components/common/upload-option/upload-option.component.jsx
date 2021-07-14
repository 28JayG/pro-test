import { AppColors } from '../../../constants/colors';
import FileIcon from '../file-icon/file-icon.component';

import './upload-option.styles.scss';

const UploadOption = ({ marginTop, icon, title }) => {
  return (
    <div className='upload-option' style={{ marginTop: `${marginTop ?? 0}px` }}>
      <FileIcon
        size='md'
        title={title}
        backgroundColor={AppColors.nav_link_bg}
        color='transparent'
        icon={icon}
      />
    </div>
  );
};

export default UploadOption;

import { useState } from 'react';
import { bottomNavRoutes } from '../../../constants/routes';
import { AppColors } from '../../../constants/colors';

import SquareButton from '../square-button/square-button.component';
import CustomNavLink from './custom-nav-link/custom-nav-link.component';
import UploadCurve from '../../pop-up/upload-curve/upload-curve.component';
import { IconPlus } from '@tabler/icons';

import './bottom-navigation.styles.scss';

const BottomNav = () => {
  const [showUpload, setShowUpload] = useState(false);

  const { my_cloud, local_storage, notifications, profile } = bottomNavRoutes;

  const toggleShowUpload = (value) => setShowUpload(value);

  return (
    <>
      <div className='bottom-nav-wrapper'>
        <div className='bottom-nav'>
          <CustomNavLink to={my_cloud.route} icon={my_cloud.icon()} />
          <CustomNavLink to={local_storage.route} icon={local_storage.icon()} />
          <SquareButton
            rotate='45deg'
            color='white'
            backgroundColor={AppColors.disabled_gray}
            onClick={() => toggleShowUpload(true)}
          >
            <IconPlus />
          </SquareButton>
          <CustomNavLink to={notifications.route} icon={notifications.icon()} />
          <CustomNavLink to={profile.route} icon={profile.icon()} />
        </div>
      </div>
      {showUpload && <UploadCurve open={showUpload} onClose={() => toggleShowUpload(false)} />}
    </>
  );
};

export default BottomNav;

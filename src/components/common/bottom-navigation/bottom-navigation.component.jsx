import { bottomNavRoutes } from '../../../constants/routes';

import SquareButton from '../square-button/square-button.component';
import CustomNavLink from './custom-nav-link/custom-nav-link.component';
import { IconPlus } from '@tabler/icons';
import './bottom-navigation.styles.scss';
import { AppColors } from '../../../constants/colors';

const BottomNav = () => {
  const { my_cloud, local_storage, notifications, profile } = bottomNavRoutes;

  return (
    <div className='bottom-nav-wrapper'>
      <div className='bottom-nav'>
        <CustomNavLink to={my_cloud.route} icon={my_cloud.icon()} />
        <CustomNavLink to={local_storage.route} icon={local_storage.icon()} />
        <SquareButton
          rotate='45deg'
          color='white'
          backgroundColor={AppColors.disabled_gray}
        >
          <IconPlus />
        </SquareButton>
        <CustomNavLink to={notifications.route} icon={notifications.icon()} />
        <CustomNavLink to={profile.route} icon={profile.icon()} />
      </div>
    </div>
  );
};

export default BottomNav;

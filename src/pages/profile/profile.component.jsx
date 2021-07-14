import { IconEdit } from '@tabler/icons';
import MainLayout from '../../components/common/main-layout/main-layout.component';
import StorageIndicator from '../../components/common/storage-indicator/storage-indicator.component';
import ProfileDetails from '../../components/profile/profile-details/profile-details.component';

import './profile.styles.scss';

const Profile = () => {
  return (
    <MainLayout>
      <div className='profile-header'>
        <h3 className='profile-heading'>Profile</h3>
        <div className='profile-edit'>
          <IconEdit />
        </div>
      </div>

      <ProfileDetails />
    </MainLayout>
  );
};

export default Profile;

import { IconEdit } from '@tabler/icons';
import MainLayout from '../../components/common/main-layout/main-layout.component';
import OptionsTile from '../../components/profile/options-tile/options-tile.component';
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
      <div className='options'>
        <OptionsTile title='Storage Management' />
        <OptionsTile
          title='Devices'
          subtitle='iPhone, iPad, Mac'
          onClick={() => {}}
        />
        <OptionsTile title='Camera upload' isSwitch onClick={() => {}} active />
        <OptionsTile
          title='use data for file transfer'
          isSwitch
          onClick={() => {}}
        />
      </div>
    </MainLayout>
  );
};

export default Profile;

import StorageIndicator from '../../common/storage-indicator/storage-indicator.component';
import './profile-details.styles.scss';

const ProfileDetails = ({ user }) => {
  return (
    <div className='pd'>
      <div className='pd-row'>
        <div className='pd-dp'></div>
        <div className='pd-col'>
          <h4 className='user-name'>Jessie Roberts</h4>
          <p className='cloud-details'>1458 files . 25 folders</p>
        </div>
      </div>
      <StorageIndicator increaseStorageButton />
    </div>
  );
};

export default ProfileDetails;

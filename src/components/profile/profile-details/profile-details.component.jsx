import { connect } from 'react-redux';

import StorageIndicator from '../../common/storage-indicator/storage-indicator.component';

import './profile-details.styles.scss';

const ProfileDetails = ({ user }) => {
  if (!user) {
    return <div />;
  }

  const { firstName, lastName, files, folders, imageUrl } = user;

  return (
    <div className='pd'>
      <div className='pd-row'>
        <div className='pd-dp' style={{backgroundImage: `url(${imageUrl})`}}></div>
        <div className='pd-col'>
          <h4 className='user-name'>{firstName} {lastName}</h4>
          <p className='cloud-details'>{files.length} files . {folders.length} folders</p>
        </div>
      </div>
      <StorageIndicator user={user} increaseStorageButton />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
});

export default connect(mapStateToProps)(ProfileDetails);

import StorageIndicator from '../../common/storage-indicator/storage-indicator.component';

import './summary.styles.scss';

const Summary = ({ user }) => {
  const { firstName } = user;

  return (
    <div className='summary'>
      <h1 className='smry-greeting'>Hello {firstName},</h1>
      <p className='smry-subtitle'>at the moment you have</p>
      <StorageIndicator user={user} upgradeButton isHome />
    </div>
  );
};

export default (Summary);

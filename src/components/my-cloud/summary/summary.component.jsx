import StorageIndicator from '../../common/storage-indicator/storage-indicator.component';
import './summary.styles.scss';

const Summary = () => {
  return (
    <div className='summary'>
      <h1 className='smry-greeting'>Hello Jessie,</h1>
      <p className='smry-subtitle'>at the moment you have</p>
      <StorageIndicator upgradeButton isHome />
    </div>
  );
};

export default Summary;

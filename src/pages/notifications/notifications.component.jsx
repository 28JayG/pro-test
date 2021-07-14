import MainLayout from '../../components/common/main-layout/main-layout.component';
import emptyImage from '../../assets/images/empty.png';
import { NO_NOTI_TEXT, NO_NOTI_TITLE } from '../../constants/strings';

import './notifications.styles.scss';

const Notifications = () => {
  return (
    <MainLayout>
      <div className='nft-header'>
        <h3>Notifications</h3>
      </div>
      <div className='nft-body'>
        <div className='nft-empty'>
          <img src={emptyImage} alt='' />
          <h3 className='title'>{NO_NOTI_TITLE}</h3>
          <p className='subtite'>{NO_NOTI_TEXT}</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Notifications;

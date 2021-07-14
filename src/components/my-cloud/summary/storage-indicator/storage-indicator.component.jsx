import SquareButton from '../../../common/square-button/square-button.component';
import { IconArrowUp } from '@tabler/icons';
import { AppColors } from '../../../../constants/colors';

import './storage-indicator.styles.scss';

const StorageIndicator = ({ showUpgradeButton }) => {
  const usedStorageInGB = 76.7;
  const totalStorageInGB = 100;

  const leftStorageInGB = (totalStorageInGB - usedStorageInGB).toFixed(1);

  const usedPercentage = (usedStorageInGB / totalStorageInGB) * 100;

  return (
    <div className='storage-indicator'>
      <div className='si-row'>
        <h3>
          <strong>{leftStorageInGB} GB</strong> of {totalStorageInGB} GB free
        </h3>
        <SquareButton
          color={AppColors.home_blue}
          backgroundColor={AppColors.pink}
        >
          <IconArrowUp />
        </SquareButton>
      </div>

      <div className='indicator-track'>
        <div
          className='indicator-value'
          style={{ width: `${usedPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default StorageIndicator;

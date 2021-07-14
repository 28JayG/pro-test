import { Doughnut } from 'react-chartjs-2';
import { FileTypes } from '../../../constants/file.types';

import './storage-pie.styles.scss';

const StoragePie = () => {
  const usedSpaceinGB = 65.5;

  const data = {
    datasets: [
      {
        data: [12, 19, 5, 2, 3],
        backgroundColor: [
          FileTypes.music.color(0.3),
          FileTypes.images.color(0.3),
          FileTypes.archives.color(0.3),
          FileTypes.documents.color(0.3),
          FileTypes.video.color(0.3),
        ],
      },
    ],
  };

  const chartProps = {
    data: data,
  };

  return (
    <div className='sp-chart'>
      <Doughnut {...chartProps} />
      <h3 className='sp-used'>{usedSpaceinGB} GB</h3>
    </div>
  );
};

export default StoragePie;

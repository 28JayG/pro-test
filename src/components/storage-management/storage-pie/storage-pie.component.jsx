import { Doughnut } from 'react-chartjs-2';
import { FileTypes } from '../../../constants/file.types';
import LegendItem from '../legend-item/legend-item.compnent';

import './storage-pie.styles.scss';

const StoragePie = () => {
  const usedSpaceinGB = 65.5;

  const data = {
    datasets: [
      {
        data: [12, 19, 5, 2, 3],
        backgroundColor: [
          FileTypes.music.color(0.4),
          FileTypes.images.color(0.4),
          FileTypes.archives.color(0.4),
          FileTypes.documents.color(0.4),
          FileTypes.video.color(0.4),
        ],
      },
    ],
  };

  const chartProps = {
    data: data,
  };

  const fileTypes = Object.values(FileTypes);

  return (
    <>
      <div className='sp-chart'>
        <Doughnut {...chartProps} />
        <h3 className='sp-used'>{usedSpaceinGB} GB</h3>
      </div>
      <div className='sp-legend-wrapper'>
        {fileTypes.map((type) => (
          <LegendItem
            key={type.title}
            color={type.color()}
            title={type.title}
          />
        ))}
      </div>
    </>
  );
};

export default StoragePie;

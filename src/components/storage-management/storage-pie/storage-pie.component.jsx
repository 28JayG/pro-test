import { Doughnut } from 'react-chartjs-2';
import { FileTypes } from '../../../constants/file.types';
import {
  getStorageUsedByAFileTypeInGB,
  getTotalUsedSpace,
} from '../../../utils/utils';
import LegendItem from '../legend-item/legend-item.compnent';

import './storage-pie.styles.scss';

const StoragePie = ({ userFiles }) => {
  const usedSpaceinGB = (getTotalUsedSpace(userFiles) / Math.pow(1024, 2)).toFixed(1);

  const { music, images, archives, documents, video } = FileTypes;

  const data = {
    datasets: [
      {
        data: [
          getStorageUsedByAFileTypeInGB(userFiles, music),
          getStorageUsedByAFileTypeInGB(userFiles, images),
          getStorageUsedByAFileTypeInGB(userFiles, archives),
          getStorageUsedByAFileTypeInGB(userFiles, documents),
          getStorageUsedByAFileTypeInGB(userFiles, video),
        ],
        backgroundColor: [
          music.color(0.4),
          images.color(0.4),
          archives.color(0.4),
          documents.color(0.4),
          video.color(0.4),
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

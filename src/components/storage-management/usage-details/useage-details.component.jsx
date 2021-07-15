import { useState } from 'react';
import { files as dbFiles } from '../../../data/files';

import File from '../../common/file/file.component';
import Tab from '../../common/tab-bar/tab/tab.component';
import Tabbar from '../../common/tab-bar/tabbar.component';

import './usage-details.styles.scss';

const tabs = {
  least_used: 'least used',
  largest: 'largest',
  latest_accessed: 'latest accessed',
};

const UsageDetails = ({ user }) => {
  const [activeTab, setActive] = useState(tabs.least_used);

  const { files } = user;

  return (
    <section className='ud-container'>
      <Tabbar>
        {Object.keys(tabs).map((tab) => (
          <Tab
            key={tabs[tab]}
            heading={tabs[tab]}
            onClick={() => setActive(tabs[tab])}
            active={activeTab === tabs[tab]}
          />
        ))}
      </Tabbar>

      <div className='files-list'>
        {files.map((file) => (
          <File file={dbFiles[file]} />
        ))}
      </div>
    </section>
  );
};

export default UsageDetails;

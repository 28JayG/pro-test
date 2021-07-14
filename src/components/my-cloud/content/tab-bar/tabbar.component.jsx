import { useState } from 'react';
import ContentTab from './tab/tab.component';
import './tabbar.styles.scss';

const tabs = {
  files: 'files',
  folders: 'folders',
};

const Tabbar = () => {
  const [activeTab, setActiveTab] = useState(tabs.folders);

  const toggleTabs = (tab) => setActiveTab(tab);

  return (
    <div className='content-tabbar'>
      <ContentTab
        heading='files'
        onClick={() => toggleTabs(tabs.files)}
        active={activeTab === tabs.files}
      />
      <ContentTab
        heading='folders'
        onClick={() => toggleTabs(tabs.folders)}
        active={activeTab === tabs.folders}
      />
    </div>
  );
};

export default Tabbar;

import { useState } from 'react';
import SearchBar from '../../common/search-bar/search-bar.component';
import './content.styles.scss';
import Folder from './folder/folder.component';
import Tab from '../../common/tab-bar/tab/tab.component';
import Tabbar from '../../common/tab-bar/tabbar.component';

const tabs = {
  files: 'files',
  folders: 'folders',
};

const Content = () => {
  const [activeTab, setActiveTab] = useState(tabs.folders);

  const toggleTabs = (tab) => setActiveTab(tab);

  return (
    <section className='content-container'>
      <div className='cntnt-sticky'>
        <SearchBar />
        
        <Tabbar>
          <Tab
            heading='files'
            onClick={() => toggleTabs(tabs.files)}
            active={activeTab === tabs.files}
          />
          <Tab
            heading='folders'
            onClick={() => toggleTabs(tabs.folders)}
            active={activeTab === tabs.folders}
          />
        </Tabbar>
      </div>

      <div className='content-grid'>
        <Folder title='Some thing' fileCount='7' totalSizeInGB='21.2' />
        <Folder title='Some thing' fileCount='7' totalSizeInGB='21.2' />
        <Folder title='Some thing' fileCount='7' totalSizeInGB='21.2' />
        <Folder title='Some thing' fileCount='7' totalSizeInGB='21.2' />
      </div>
    </section>
  );
};

export default Content;

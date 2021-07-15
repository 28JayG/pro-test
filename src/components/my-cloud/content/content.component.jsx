import { useState } from 'react';
import { folders as dbFolders } from '../../../data/folders';

import SearchBar from '../../common/search-bar/search-bar.component';
import Folder from './folder/folder.component';
import Tab from '../../common/tab-bar/tab/tab.component';
import Tabbar from '../../common/tab-bar/tabbar.component';

import './content.styles.scss';
import { getFolderSize } from '../../../utils/utils';

const tabs = {
  files: 'files',
  folders: 'folders',
};

const Content = ({ user }) => {
  const [activeTab, setActiveTab] = useState(tabs.folders);

  const { folders } = user;

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
        {folders.map((folder) => {
          return (
            <Folder
              title={dbFolders[folder].name}
              fileCount={dbFolders[folder].files.length}
              totalSize={getFolderSize(dbFolders[folder])}
              sharers={dbFolders[folder].sharers}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Content;

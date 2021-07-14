import MainLayout from '../../components/common/main-layout/main-layout.component';
import SearchBar from '../../components/common/search-bar/search-bar.component';
import FileTypeFilter from '../../components/local-storage/file-type-filter/file-type-filter.component';

import './local-storage.styles.scss';

const LocalStorage = () => {
  return (
    <MainLayout>
      <div className='ls-header'>
        <h3>Local Storage</h3>
      </div>
      <div className='ls-body'>
        <SearchBar />
      </div>
      <FileTypeFilter />
    </MainLayout>
  );
};

export default LocalStorage;

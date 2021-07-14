import SearchBar from '../../common/search-bar/search-bar.component';
import './content.styles.scss';
import Folder from './folder/folder.component';
import Tabbar from './tab-bar/tabbar.component';

const Content = () => {
  return (
    <section className='content-container'>
      <div className='cntnt-sticky'>
        <SearchBar />
        <Tabbar />
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

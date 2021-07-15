import { connect } from 'react-redux';
import { files as dbFiles } from '../../data/files';

import MainLayout from '../../components/common/main-layout/main-layout.component';
import SearchBar from '../../components/common/search-bar/search-bar.component';
import FileTypeFilter from '../../components/local-storage/file-type-filter/file-type-filter.component';
import File from '../../components/common/file/file.component'

import './local-storage.styles.scss';

const LocalStorage = ({ user }) => {
  if(!user) return <div/>

  const { files } = user;

  return (
    <MainLayout>
      <div className='ls-header'>
        <h3>Local Storage</h3>
      </div>
      <div className='ls-body'>
        <SearchBar />
        <FileTypeFilter />
        {files.map(file => <File file={dbFiles[file]} />)}
      </div>
    </MainLayout>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
});

export default connect(mapStateToProps)(LocalStorage);

import { IconSearch } from '@tabler/icons';

import './search-bar.styles.scss';

const SearchBar = () => {
  return (
    <form className='sb-container'>
      <IconSearch className='sb-icon' />
      <input type='text' id='search' placeholder='Search' />
    </form>
  );
};

export default SearchBar;

import { NavLink } from 'react-router-dom';

import './custom-nav-link.styles.scss';

const CustomNavLink = ({ to, icon }) => {
  return (
    <NavLink
      className='cstm-nav-btn'
      activeClassName='cstm-nav-btn active'
      exact
      to={to}
    >
      {icon && icon}
    </NavLink>
  );
};

export default CustomNavLink;

import BottomNav from '../bottom-navigation/bottom-navigation.component';
import './main-layout.styles.scss';

const MainLayout = ({ isHome, children, isSubPage }) => {
  return (
    <>
      <div
        className={`ml-container ${isHome ? 'home' : ''} ${
          isSubPage ? 'subpage' : ''
        }`}
      >
        {children}
      </div>
      <BottomNav />
    </>
  );
};

export default MainLayout;

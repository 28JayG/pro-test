import BottomNav from '../bottom-navigation/bottom-navigation.component';
import './main-layout.styles.scss';

const MainLayout = ({ isHome, children }) => {
  return (
    <>
      <div className={`ml-container ${isHome ? 'home' : ''}`}>{children}</div>
      <BottomNav />
    </>
  );
};

export default MainLayout;

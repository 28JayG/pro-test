import './tabbar.styles.scss';

const Tabbar = ({ multiple, children }) => {
  return (
    <div className={`content-tabbar ${multiple ? 'multiple' : ''}`}>
      {children}
    </div>
  );
};

export default Tabbar;

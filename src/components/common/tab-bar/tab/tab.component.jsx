import './tab.styles.scss';

const Tab = ({ active, heading, ...otherTabProps }) => {
  return (
    <div className='ct-tab' {...otherTabProps}>
      <p className={`ct-heading ${active ? 'active' : ''}`}>{heading}</p>
      <div className={`ctt-indicator ${active ? 'active' : ''}`} />
    </div>
  );
};

export default Tab;

import './legend-item.styles.scss';

const LegendItem = ({ color, title }) => {
  return (
    <div className='li-col'>
      <div className='li-color' style={{ backgroundColor: color }} />
      <p>{title}</p>
    </div>
  );
};

export default LegendItem;

import './file-icon.styles.scss';

const FileIcon = ({
  icon,
  color,
  backgroundColor,
  size,
  inline,
  title,
  ...otherProps
}) => {
  //size opions: md, lg, thumb
  return (
    <div className={`fi-container ${inline ? 'inline' : ''}`}>
      <div
        className={`fi-bg ${size ?? 'md'}`}
        style={{ backgroundColor: backgroundColor }}
        {...otherProps}
      >
        <div
          className={`file-icon ${size ?? 'md'}`}
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
      </div>
      <p className='fi-title'>{title}</p>
    </div>
  );
};

export default FileIcon;

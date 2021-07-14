import './square-button.styles.scss';

const SquareButton = ({
  children,
  rotate,
  backgroundColor,
  color,
  size,
  ...otherProps
}) => {
  // size values: lg, regular
  // rotate values: <any number>deg
  const buttonStyles = {
    backgroundColor: backgroundColor,
    transform: `rotateZ(${rotate ?? '0deg'})`,
    color: color,
  };

  const childStyles = {
    transform: `rotateZ(-${rotate ?? '0deg'})`,
  };

  return (
    <div
      className={`sqr-btn ${size ?? 'regular'}`}
      style={buttonStyles}
      {...otherProps}
    >
      <div className='children' style={childStyles}>
        {children}
      </div>
    </div>
  );
};

export default SquareButton;

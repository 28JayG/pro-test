import './sharer-thumb.styles.scss';

const SharerThumb = ({ sharer, showExtraCount, excessCount }) => (
  <div
    className={`shr-thumb ${showExtraCount ? 'extra' : ''}`}
    style={{ backgroundImage: `url(${sharer ? sharer.imageUrl : ''})` }}
  >
    {showExtraCount && `+${excessCount}`}
  </div>
);

export default SharerThumb;

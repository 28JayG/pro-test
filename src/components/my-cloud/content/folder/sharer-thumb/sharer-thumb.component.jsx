import './sharer-thumb.styles.scss';

const SharerThumb = ({ sharer }) => (
  <div
    className='shr-thumb'
    style={{ backgroundImage: `url(${sharer.imageUrl})` }}
  />
);

export default SharerThumb;

import './wave-bottom.styles.scss';

const WaveBottom = () => {
  return (
    <div className='wb-container'>
      <svg viewBox='0 0 379 756' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M0 0L52.6389 63C105.278 126 210.556 252 273.722 378C336.889 504 357.944 630 368.472 693L379 756L0 756L0 693C0 630 0 504 0 378C0 252 0 126 0 63L0 0Z'
          fill='#CEDBFF'
        />
        <path
          d='M0 203L36.5278 249.083C73.0556 295.167 146.111 387.333 189.944 479.5C233.778 571.667 248.389 663.833 255.694 709.917L263 756H0L0 709.917C0 663.833 0 571.667 0 479.5C0 387.333 0 295.167 0 249.083L0 203Z'
          fill='#8BACFF'
        />
        <path
          d='M0 472L30 495.667C60 519.333 120 566.667 156 614C192 661.333 204 708.667 210 732.333L216 756H0L0 732.333C0 708.667 0 661.333 0 614C0 566.667 0 519.333 0 495.667L0 472Z'
          fill='#6893FD'
        />
      </svg>
    </div>
  );
};

export default WaveBottom;
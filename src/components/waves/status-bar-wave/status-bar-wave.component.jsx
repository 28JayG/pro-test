import './status-bar-wave.styles.scss';

const StatusBarWave = ({ subPage }) => (
  <div className={`sbw-wave ${subPage ? 'short' : ''}`}>
    <svg viewBox='0 0 1200 236' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1200 216L1150 204C1100 192 1000 168 900 162C800 156 700 168 600 186C500 204 400 228 300 234C200 240 100 228 50 222L0 216V0H50C100 0 200 0 300 0C400 0 500 0 600 0C700 0 800 0 900 0C1000 0 1100 0 1150 0H1200V216Z'
        fill='#E8EEFC'
        fill-opacity='0.4'
      />
    </svg>
  </div>
);

export default StatusBarWave;

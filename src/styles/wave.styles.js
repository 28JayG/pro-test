import { AppColors } from '../constants/colors';

export const topWaveStyles = [
  {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 3,
  },
  {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
  },
  {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
  },
];

export const bottomWaveStyles = [
  {
    position: 'fixed',
    bottom: 0,
    left: 0,
    backgroundColor: AppColors.dark_blue,
    height: '70px',
    width: '70px',
    zIndex: 3,
  },
  {
    position: 'fixed',
    bottom: 0,
    left: 0,
    backgroundColor: AppColors.blue,
    height: '140px',
    width: '140px',
    zIndex: 2,
  },
  {
    zIndex: 1,
    position: 'fixed',
    bottom: 0,
    left: 0,
    backgroundColor: AppColors.light_blue,
    height: '200px',
    width: '200px',
  },
];

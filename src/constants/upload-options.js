import { IconCamera, IconScan, IconUpload } from '@tabler/icons';
import { AppColors } from './colors';

const iconStyles = (size) => ({
  color: AppColors.nav_link_active,
  width: size,
  height: size,
});

export const uploadOptions = [
  { icon: (size) => <IconScan {...iconStyles(size)} />, title: 'scan' },
  { icon: (size) => <IconCamera {...iconStyles(size)} />, title: 'photo' },
  { icon: (size) => <IconUpload {...iconStyles(size)} />, title: 'upload' },
];

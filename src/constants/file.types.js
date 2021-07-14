import {
  IconFileText,
  IconKey,
  IconMusic,
  IconPhoto,
  IconPlayerPlay,
} from '@tabler/icons';

const fileTypeIconColor = `rgba(255, 255, 255, 0.9)`;

const iconStyles = (size) => ({
  color: fileTypeIconColor,
  width: size,
  height: size,
});

export const FileTypes = {
  video: {
    title: 'video',
    icon: (size) => <IconPlayerPlay fill={fileTypeIconColor} {...iconStyles(size)} />,
    color: (opacity) => `rgba(0, 188, 218, ${opacity ?? 1})`,
  },
  music: {
    title: 'music',
    icon: (size) => <IconMusic {...iconStyles(size)} />,
    color: (opacity) => `rgba(33, 150, 243, ${opacity ?? 1})`,
  },
  images: {
    title: 'images',
    icon: (size) => <IconPhoto {...iconStyles(size)} />,
    color: (opacity) => `rgba(255, 193, 7, ${opacity ?? 1})`,
  },
  archives: {
    title: 'archives',
    icon: (size) => <IconKey {...iconStyles(size)} />,
    color: (opacity) => `rgba(74, 195, 103, ${opacity ?? 1})`,
  },
  documents: {
    title: 'documents',
    icon: (size) => <IconFileText {...iconStyles(size)} />,
    color: (opacity) => `rgba(141, 110, 99, ${opacity ?? 1})`,
  },
};

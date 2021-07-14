export const FileTypes = {
  music: {
    title: 'music',
    color: (opacity) => `rgba(33, 150, 243, ${opacity ?? 1})`,
  },
  images: {
    title: 'images',
    color: (opacity) => `rgba(255, 193, 7, ${opacity ?? 1})`,
  },
  archives: {
    title: 'archives',
    color: (opacity) => `rgba(74, 195, 103, ${opacity ?? 1})`,
  },
  documents: {
    title: 'documents',
    color: (opacity) => `rgba(141, 110, 99, ${opacity ?? 1})`,
  },
  video: {
    title: 'video',
    color: (opacity) => `rgba(0, 188, 212, ${opacity ?? 1})`,
  },
};

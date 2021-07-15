import { files } from '../data/files';
import { users } from '../data/users';
import { FileTypes } from '../constants/file.types';

export const goTo = (history, route) => {
  history.push(route);
};

export const getTotalUsedSpace = (userFiles) => {
  let totalUsedSpace = 0;
  const dbFiles = files; // fils in db

  userFiles.forEach((file) => {
    totalUsedSpace += Number(dbFiles[file].size);
  });

  return totalUsedSpace;
};

export const getFilesOfParticularType = () => {};

export const getStorageUsedByAFileTypeInGB = (userFiles, fileType) => {
  const dbFiles = files; // fils in db
  let totalSize = 0;

  userFiles.forEach((file) => {
    if (getFileType(dbFiles[file].ext).title === fileType.title) {
      totalSize += dbFiles[file].size;
    }
  });

  return (totalSize / Math.pow(1024, 2)).toFixed(0);
};

export const getFolderSize = (folder) => getTotalUsedSpace(folder.files);

export const getSharers = (sharerIDs) => {
  const dbUsers = users;

  return sharerIDs.map((sharerId) => dbUsers[sharerId]);
};

export const getFileType = (fileExtension) => {
  //regex for each file type xtnsn
  const documentTypeRegex = /(pdf|html|htm|doc|docx)/g;
  const musicTypeRegex = /(mp3|wav)/g;
  const videoTypeRegex = /(mp4|mpeg|aiv|wmv|mkv)/g;
  const archiveTypeRegex = /(zip|rar)/g;
  const imageTypeRegex = /(jpg|jpeg|png|svg|gif)/g;

  //return according to xtnsn
  if (documentTypeRegex.test(fileExtension)) return FileTypes.documents;
  if (musicTypeRegex.test(fileExtension)) return FileTypes.music;
  if (videoTypeRegex.test(fileExtension)) return FileTypes.video;
  if (archiveTypeRegex.test(fileExtension)) return FileTypes.archives;
  if (imageTypeRegex.test(fileExtension)) return FileTypes.images;
};

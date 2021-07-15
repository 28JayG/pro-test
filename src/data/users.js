// import faker from 'faker/locale/en';

export const users = {
  0: {
    id: 0,
    uid: 0,
    firstName: 'Lacy',
    lastName: 'Altenwerth',
    imageUrl: 'https://cdn.fakercloud.com/avatars/eduardostuart_128.jpg',
    cloudSpaceLimit: 1024 * 1024 * 100,
    files: [0, 6, 7, 8, 9],
    folders: [0],
  },
  1: {
    id: 1,
    uid: 1,
    firstName: 'Reid',
    lastName: 'Predovic',
    imageUrl: 'https://cdn.fakercloud.com/avatars/hellofeverrrr_128.jpg',
    cloudSpaceLimit: 1024 * 1024 * 100,
    files: [3, 5],
    folders: [],
  },
  2: {
    id: 2,
    uid: 2,
    firstName: 'Edwardo',
    lastName: 'Altenwerth',
    imageUrl: 'https://cdn.fakercloud.com/avatars/shoaib253_128.jpg',
    cloudSpaceLimit: 1024 * 1024 * 100,
    files: [9],
    folders: [],
  },
  3: {
    id: 3,
    uid: 3,
    files: [0, 1, 2, 3],
    folders: [4, 6],
    firstName: 'Rocky',
    lastName: 'Rippin',
    imageUrl: 'https://cdn.fakercloud.com/avatars/randomlies_128.jpg',
    cloudSpaceLimit: 1024 * 1024 * 100,
  },
  4: {
    id: 4,
    uid: 4,
    files: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    folders: [0, 1, 2, 3, 4, 5, 6],
    firstName: 'Efren',
    lastName: 'Schamberger',
    imageUrl: 'https://cdn.fakercloud.com/avatars/ashernatali_128.jpg',
    cloudSpaceLimit: 1024 * 1024 * 100,
  },
};

// export const generateUsers = () => {
//   for (let i = 0; i < 5; i++) {
//     const user = {
//       id: i,
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       imageUrl: faker.image.avatar(),
//     };

//     users[user.id] = user;
//   }
// };

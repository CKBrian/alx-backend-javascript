import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    return Promise
      .all([uploadPhoto(), createUser()])
      .then((resp) => {
        const [photo, user] = resp;
        return {
          photo,
          user,
        };
      })
      .catch((e) => {
        console.error(e);
        return {
          photo: null,
          user: null,
        };
      });
  } catch (e) {
    console.error(e);
    return {
      photo: null,
      user: null,
    };
  }
}

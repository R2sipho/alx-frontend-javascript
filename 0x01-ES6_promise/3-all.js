import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const uploadResult = results[0];
      const createUserResult = results[1];

      console.log(`${uploadResult.body} ${createUserResult.firstName} ${createUserResult.lastName}`);
    })
    .catch((error) => {
      
      console.log('Signup system offline');
    });
}


import signUpUser from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName)
    .then(result => ({ status: 'fulfilled', value: result }))
    .catch(error => ({ status: 'rejected', value: error.message }));

  const uploadPromise = uploadPhoto(fileName)
    .then(result => ({ status: 'fulfilled', value: result }))
    .catch(error => ({ status: 'rejected', value: error.message }));

  return Promise.allSettled([signUpPromise, uploadPromise]);
}

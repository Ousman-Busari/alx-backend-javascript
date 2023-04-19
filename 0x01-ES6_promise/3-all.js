import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignUp() {
  const x = uploadPhoto();
  const y = createUser();
  return Promise.all([x, y])
    .then((newUser) => {
      console.log(
        `${newUser[0].body} ${newUser[1].firstName} ${newUser[1].lastName}`,
      );
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

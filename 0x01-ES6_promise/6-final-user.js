import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const x = signUpUser(firstName, lastName);
  const y = uploadPhoto(fileName);
  return Promise.allSettled([x, y]).then((newUser) => {
    const res = [];
    newUser.forEach((data) => {
      if (data.status === 'fulfilled') {
        res.push(data);
      } else {
        res.push({
          status: data.status,
          value: `Error: ${data.reason.message}`,
        });
      }
    });
    return res;
  });
}

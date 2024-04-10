import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((resp) => {
      const profile = resp.map((res) => (
        {
          status: res.status,
          value: res.status === 'fulfilled' ? res.value : String(res.reason),
        }));
      // console.log(profile)
      return profile;
    });
}

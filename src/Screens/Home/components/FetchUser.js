import config from '../../../../Config';

const apiString = '/api/getUserData';

const FetchUser = async username => {
  console.warn(username);
  const response = await fetch(`${config.connectionIP}${apiString}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username }),
  });
  const result = await response.json();
  return result;
};

export default FetchUser;

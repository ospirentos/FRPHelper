import hash from 'hash.js';
import config from '../../../Config';
import StorageAdd from './Components/StorageAdd';

async function HandleSubmit(submitData) {
  const { username, password, type } = submitData;
  let ApiString = '';
  if (type === 'login') {
    ApiString = '/api/login';
  } else {
    ApiString = '/api/signup';
  }
  const loginCredentals = {
    username,
    password: hash
      .sha256()
      .update(password)
      .digest('hex'),
  };
  const response = await fetch(`${config.connectionIP}${ApiString}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginCredentals),
  });
  const result = await response.json();
  if (result.successfull === 'true') {
    const userData = {
      username,
      token: result.token,
    };
    (async () => {
      await StorageAdd(JSON.stringify(userData));
    })();
    return true;
  }
  return false;
}

export default HandleSubmit;

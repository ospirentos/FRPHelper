import config from '../../Config';

async function LoginWithToken(tokenValue) {
  const response = await fetch(`${config.connectionIP}/api/loginWithToken`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tokenValue),
  });
  const result = await response.json();
  return result;
}

export default LoginWithToken;

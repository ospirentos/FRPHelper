import config from '../../../Config';

const apiString = '/api/createNewCharacter';

const PostNewCharData = async charData => {
  const response = await fetch(`${config.connectionIP}${apiString}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ charData }),
  });
  const result = await response.json();
  return result.successfull;
};

export default PostNewCharData;

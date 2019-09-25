import PropTypes from 'prop-types';
import config from '../../../Config';

const apiString = '/api/removeCharacter';

const RemoveCharacter = async (charname, username) => {
  const data = {
    charname,
    username,
  };
  const response = await fetch(`${config.connectionIP}${apiString}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  });
  const result = await response.json();
  return result.successfull;
};

RemoveCharacter.propTypes = {
  charname: PropTypes.string,
  username: PropTypes.string,
};

RemoveCharacter.defaultProps = {
  charname: 'untitled',
  username: 'untitled',
};

export default RemoveCharacter;

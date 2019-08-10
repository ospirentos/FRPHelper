import StorageAdd from './StorageAdd'
import hash from 'hash.js'
import config from '../../../../Config'

let PostLoginInfo = (username, password) => {
    loginCredentals = {
        username: username,
        password: hash.sha256().update(password).digest('hex')
    }
    fetch(config.connectionIP + '/api/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginCredentals),
    }).then(function (response) {
        return response.json();
    }).then((result) => {
        if (result.successfull === "true") {
            const userData = {
                username: username,
                token: result.token
            };
            (async () => {
                await StorageAdd(JSON.stringify(userData));
            })();
            return true;
        } else {
            console.warn('Failed to login!')
            return false;
        }
    }).catch((e) => {
        console.log("Login.js SendLogin throws an error: ", e);
    })
}

export default PostLoginInfo;
/*
import StorageRead from './StorageRead'
import config from '../../../../Config'

let LoginWithToken = () => {
    (async () => {
        const userData = await StorageRead();
        return userData;
    })().then((userData) => {
        if (userData !== -1) {
            const tokenInfo = {
                token: userData.token
            }
            const response = await fetch(config.connectionIP + '/api/loginWithToken', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tokenInfo),
            });
            const result = await response.json();
                if (result.successfull === true) {
                    console.log('1');
                    return true;
                } else {
                    console.log('2');
                    return false;
                }
        } else {
            console.log('3');
            return false;
        }
    }).catch((e) => {
        console.log("Error thrown by LoginWithToken storage fetch: ", e);
    })
}

export default LoginWithToken;
*/
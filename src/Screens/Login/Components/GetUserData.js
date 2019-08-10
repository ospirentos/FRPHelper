import config from '../../../../Config'

let GetUserData = (username) => {
    if (username === 'none') {
        console.log('Error in getUserData!');
    }
    fetch(config.connectionIP + '/api/getUserData', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username : username}),
    }).then(function (response) {
        return response.json();
    }).then((result) => {
        if (result.successfull === "true") {
            const userData = result.userData;
            console.log(userData);
        } else {
            console.warn('Failed to login!')
            return false;
        }
    }).catch((e) => {
        console.log("Login.js SendLogin throws an error: ", e);
    })
}

export default GetUserData;
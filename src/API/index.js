const apiUrl = "http://localhost:8090/api";

const signIn = (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${apiUrl}/auth/signin`, requestOptions)
        .then(res => res.json())
        .then(res => {
            console.log(`username: ${res.username}`);
            if (res.username === undefined) {
                return Promise.reject('Invalid creds');
            }

            return res;
        })
        .catch(err => {
            console.log(`error: ${err}`);
            return err;
        })
}

export default signIn;
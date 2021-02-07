export const fetchWithToken = (url, token) => {
    return fetch(process.env.BASE_URL + url, {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    }).then(r => r.json());
}

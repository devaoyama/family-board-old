export const get = async (endpoint: string, jwt: string) => {
    const res = await fetch(process.env.BASE_URL + endpoint, {
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + jwt
        },
    });
    if (res.status === 401 || res.status === 403) {
        liff.logout();
    }
    return await res.json()
}

export const post = async (endpoint: string, body: string, jwt: string) => {
    const res = await fetch(process.env.BASE_URL + endpoint, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + jwt,
            'Content-Type': 'application/json',
        },
        body
    });
    if (res.status === 401 || res.status === 403) {
        liff.logout();
    }
    return await res.json()
}

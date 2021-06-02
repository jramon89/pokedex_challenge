const api_url = 'https://pokeapi.co/api/v2';


export default function apiConfig(endpoint, params, method = 'GET') {
    return fetch(`${api_url}/${endpoint}`, {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(response => response.json()
        .then(json => ({ json, response }))
    ).then(({ json, response }) => {
        if (!response.ok) {
            return json;
        }
        return json;
    }).then(
        response => response
    )
}
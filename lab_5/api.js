/*const BASE_URL = 'http://localhost:3000';
const RESOURSE_URL = `${BASE_URL}/trees`;

const baseRequest = async ({urlPath = '', method = 'GET', body = null}) => {
    try {
        const reqParams = {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body)
        }

        return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
    } catch (error) {

    }
}

export const getAllTrees = async () => {
    const rawResponse = await baseRequest({ method: "GET"});

    return rawResponse.json();
}

export const postTree = (body) => baseRequest({method: "POST", body});

export const putTree = async (id, body) => baseRequest({urlPath: `/${id}`, method: "PUT", body});

export const deleteTree = (id) => baseRequest({urlPath: `/${id}`, method: "DELETE", id});*/

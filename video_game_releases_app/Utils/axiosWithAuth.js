import axios from "axios"

const axiosWithAuth = () => {
    const clientIdHeader = process.env.client_id
    const authorizationHeader = process.env.Authorization

    return axios.create({
        headers: {
            'Client-ID': clientIdHeader,
            'Authorization': authorizationHeader,
        },
        baseURL: "https://api.igdb.com/v4"
    });
};

export default axiosWithAuth
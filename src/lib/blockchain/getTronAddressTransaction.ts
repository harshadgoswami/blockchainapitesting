import axios from "axios";

export const getTronAddressTransaction = async (address: string) => {
    const options = {
        method: 'GET',
        url: `https://api.shasta.trongrid.io/v1/accounts/${address}/transactions`,
        headers: { accept: 'application/json' }
    };

    return axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
            return [];
        });
}

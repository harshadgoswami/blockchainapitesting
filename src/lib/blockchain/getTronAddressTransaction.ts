import axios from "axios";

interface TronTransaction {
    txID: string;
    raw_data: {
        contract: [
            {
                parameter: {
                    value: {
                        amount: number | undefined;
                        owner_address: string;
                        to_address: string | undefined;
                        data: string | undefined;
                        contract_address: string | undefined;
                    }
                }
            }
        ]
    };
}

export const getTronAddressTransaction = async (address: string) => {
    const options = {
        method: 'GET',
        url: `https://api.shasta.trongrid.io/v1/accounts/${address}/transactions`,
        headers: { accept: 'application/json' }
    };

    return axios
        .request(options)
        .then(function (response) {
            return response.data.data as TronTransaction[];
        })
        .catch(function (error) {
            console.error(error);
            return [] as TronTransaction[];
        });
}

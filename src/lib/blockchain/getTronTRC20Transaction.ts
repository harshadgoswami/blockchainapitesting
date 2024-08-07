import axios from "axios";

interface TronTRC20Transaction {
    transaction_id: string;
    token_info: {
        symbol: string; // USDT
        address: string; //"TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs",
        decimals: number;
        name: string;
    };
    block_timestamp: number;
    from: string;
    to: string;
    type: string; //Transfer
    value: string // "10000000000000"
}

export const getTronTrc20Transaction = async (address: string, contractAddress: string) => {
    const options = {
        method: 'GET',
        url: `https://api.shasta.trongrid.io/v1/accounts/${address}/transactions/trc20?contract_address=${contractAddress}`,
        headers: { accept: 'application/json' }
    };

    return axios
        .request(options)
        .then(function (response) {
            return response.data.data as TronTRC20Transaction[];
        })
        .catch(function (error) {
            console.error(error);

            return [] as TronTRC20Transaction[];
        });
}


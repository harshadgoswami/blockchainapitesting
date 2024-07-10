
import tron from '@api/tron';

export const getTronAddressTransaction = async (address: string) => {
    const transaction = await tron.getTransactionInfoByAccountAddress({ address: address })
        .then(({ data }) => console.log(data))
        .catch(err => console.error(err));

    return transaction;
}

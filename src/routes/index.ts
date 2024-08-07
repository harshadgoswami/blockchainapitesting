import { Request, Response, Router } from "express";
import { getTronAddressTransaction } from "../lib/blockchain/getTronAddressTransaction";
import { getTronTrc20Transaction } from "../lib/blockchain/getTronTRC20Transaction";
//import { getTronTransaction } from "../lib/blockchain/getTronTransaction";


const routes = Router();

routes.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "welcome" });
});


routes.get("/tronget", async (req: Request, res: Response) => {

    // Replace with the actual address you want to check
    const accountAddress = 'TYkqQVTjv8Zk7tH8g9kXs2Bqx5ramKyhaa';

    const transactions = await getTronAddressTransaction(accountAddress);

    //console.log(JSON.stringify(transactions));


    transactions.map((tx) => {

        tx.raw_data.contract.map((d) => {

            if (d.parameter.value.amount) {
                console.log({ tx: d.parameter.value })
            }
        });
    });

    res.status(200).json({ message: "welcome" });
});

routes.get("/trontrc20get", async (req: Request, res: Response) => {

    // Replace with the actual address you want to check
    // reference : 
    // USDT CONTRACT ON SHASTA NETWORK
    //https://shasta.tronscan.org/#/token20/TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs/holders
    const accountAddress = 'TT5ZmVgbxiPyixb5Y99F4i5vcDygwH1mPm';
    const contractAddress = 'TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs'

    const transactions = await getTronTrc20Transaction(accountAddress, contractAddress);

    console.log(JSON.stringify(transactions));


    res.status(200).json({ message: "welcome" });
});

export default routes;
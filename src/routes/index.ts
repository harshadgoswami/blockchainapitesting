import { Request, Response, Router } from "express";
import { getTronAddressTransaction } from "../lib/blockchain/getTronAddressTransaction";
//import { getTronTransaction } from "../lib/blockchain/getTronTransaction";


const routes = Router();

routes.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "welcome" });
});


routes.get("/tronget", async (req: Request, res: Response) => {

    // Replace with the actual address you want to check
    const accountAddress = 'TYkqQVTjv8Zk7tH8g9kXs2Bqx5ramKyhaa';

    const transaction = await getTronAddressTransaction(accountAddress);
    console.log({ transaction });

    res.status(200).json({ message: "welcome", transaction });
});

export default routes;
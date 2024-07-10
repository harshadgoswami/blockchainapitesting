import { Request, Response, Router } from "express";
import { getTronTransaction } from "../lib/blockchain/getTronTransaction";


const routes = Router();

routes.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "welcome" });
});


routes.get("/tronget", async (req: Request, res: Response) => {

    // Replace with the actual address you want to check
    const accountAddress = 'TXRq2ovfj98DHoMz4MpxMULKPvimH3vaAS';
    const transaction = await getTronTransaction(accountAddress);

    console.log({ transaction });

    res.status(200).json({ message: "welcome", transaction });
});

export default routes;
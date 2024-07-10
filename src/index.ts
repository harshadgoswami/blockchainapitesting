import express, { Request, Response, NextFunction } from "express";
import routes from "./routes";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use("/api", routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.stack);
    res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
    console.log("Server is working ");
});


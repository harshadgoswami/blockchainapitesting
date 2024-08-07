"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getTronAddressTransaction_1 = require("../lib/blockchain/getTronAddressTransaction");
//import { getTronTransaction } from "../lib/blockchain/getTronTransaction";
const routes = (0, express_1.Router)();
routes.get("/", (req, res) => {
    res.status(200).json({ message: "welcome" });
});
routes.get("/tronget", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Replace with the actual address you want to check
    const accountAddress = 'TYkqQVTjv8Zk7tH8g9kXs2Bqx5ramKyhaa';
    const transactions = yield (0, getTronAddressTransaction_1.getTronAddressTransaction)(accountAddress);
    //console.log(JSON.stringify(transactions));
    transactions.map((tx) => {
        tx.raw_data.contract.map((d) => {
            if (d.parameter.value.amount) {
                console.log({ tx: d.parameter.value });
            }
        });
    });
    res.status(200).json({ message: "welcome" });
}));
exports.default = routes;

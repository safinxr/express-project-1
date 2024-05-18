"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
const userRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
userRouter.get("/create-users", (req, res) => {
    const data = req.body;
    res.json({
        message: "everything okk",
        data: data
    });
});
// middleWare
const loger = (req, res, next) => {
    console.log("loger");
    console.log(req.url);
    next();
};
app.get("/", loger, (req, res) => {
    // res.send(`home route user id: ${req.params.userId}`);
    res.send(`home `);
});
app.get("/gg", (req, res) => {
    console.log(req.query);
    res.send("its from gg");
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        message: "Post data ",
    });
});
exports.default = app;

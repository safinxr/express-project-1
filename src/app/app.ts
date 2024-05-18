import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;

// parsers
app.use(express.json());
app.use(express.text());

const userRouter = express.Router();

app.use("/api/v1/users", userRouter);

userRouter.get(
  "/create-users",
  (req: Request, res: Response) => {
    const data = req.body
    res.json({
      message: "yooooo",
      data: data
    })
  }
);

// middleWare
const loger = (req: Request, res: Response, next: NextFunction) => {
  console.log("loger");
  console.log(req.url);
  next();
};

app.get("/", loger, (req: Request, res: Response) => {
  // res.send(`home route user id: ${req.params.userId}`);
  res.send(`home `);
});

app.get("/gg", (req: Request, res: Response) => {
  console.log(req.query);
  res.send("its from gg");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "Post data ",
  });
});

export default app;

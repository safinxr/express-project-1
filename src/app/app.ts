import express, { Request, Response } from "express"
const app = express();
const port = 3000;



app.get("/", (req:Request, res:Response) => {
  res.send("Hey yo");
});

app.post("/", (req:Request, res:Response) =>{
  console.log(req.body);
  res.send("post working")
})

export default app